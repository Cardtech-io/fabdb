<?php

namespace FabDB\Domain\Games;

use FabDB\Domain\Decks\DeckRepository;
use FabDB\Http\Resources\CardResource;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class EloquentGameRepository extends EloquentRepository implements GameRepository
{
    public function __construct(private DeckRepository $decks)
    {
    }

    protected function model(): Model
    {
        return new Game;
    }

    public function saveResults(Game $game, array $cardResults)
    {
        $cards = array_map(fn($result) => new GameCard($result), $cardResults);
        $game->gameCards()->saveMany($cards);
    }

    public function overallWinRate(string $deck, ?int $userId, ?int $gameLimit): array
    {
        $deckId = $this->decks->bySlugWithCards($deck, false)->id;

        $games = $this->newQuery()->select('first', 'result')->where('deck_id', $deckId);

        if ($userId) {
            $games = $games->select('user_id')->where('user_id', $userId);
        }

        $games = $games->orderBy('created_at', 'desc');

        if($gameLimit){
            $games = $games->limit($gameLimit);
        }

        $games = $games->get();

        $allGames = $games->count();

        $wonFirst = $games->where('first', 1)->where('result', 1)->count();
        $lostFirst = $games->where('first', 1)->where('result', 0)->count();
        $wonSecond = $games->where('first', 0)->where('result', 1)->count();
        $lostSecond = $games->where('first', 0)->where('result', 0)->count();

        return [
            'wonFirst' => $wonFirst,
            'lostFirst' => $lostFirst,
            'wonSecond' => $wonSecond,
            'lostSecond' => $lostSecond,
            'allGames' => $allGames
        ];
    }

    public function winRateByClass(int $deckId, int $limit, ?int $userId)
    {
        $query = $this->newQuery()
            ->select('games.first', 'games.result', 'cards.class')
            ->join('cards', 'cards.id', 'games.opposing_hero_id')
            ->where('deck_id', $deckId)
            ->orderBy('games.id', 'desc');

        if ($userId) {
            $query = $query->whereUserId($userId);
        }

        $games = $query
            ->limit($limit)
            ->get();

        $data = $games->groupBy('class');

        $data = $data->map(function (Collection $games) {
            return round(($games->reduce(fn($carry, Game $game) => $carry + $game->result, 0) / $games->count()) * 100);
        });

        $total = $games->count();

        return [
            'total' => $total,
            'data' => $data
        ];
    }

    public function winRateByHero(int $deckId, int $limit, ?int $userId)
    {
        $query = $this->newQuery()
            ->select('games.first', 'games.result', 'games.opposing_hero_id')
            ->with(['opposingHero' => function ($query) {
                $query->select('cards.id', 'cards.name', 'cards.image');
            }])
            ->where('deck_id', $deckId)
            ->orderBy('games.id', 'desc');

        if ($userId) {
            $query = $query->whereUserId($userId);
        }

        $games = $query
            ->limit($limit)
            ->get();

        $data = $games
            ->groupBy('opposing_hero_id')
            ->map(function (Collection $games) {
                $totalWins = $games->reduce(fn($carry, Game $game) => $carry + $game->result, 0);

                return [
                    'hero' => new CardResource($games[0]->opposingHero),
                    'winRate' => round(($totalWins / $games->count()) * 100),
                    'totalGames' => $games->count()
                ];
            });

        $total = $games->count();

        return [
            'total' => $total,
            'data' => $data
        ];
    }

    public function winRate(int $deckId, int $gameLimit, ?int $userId)
    {
        $games = $this->newQuery()
            ->select('id', 'result')
            ->whereDeckId($deckId)
            ->when($userId, fn($query) => $query->whereUserId($userId))
            ->limit($gameLimit)
            ->get();

        return [
            'total' => $games->count(),
            'won' => $games->filter(fn($game) => $game->result == 1)->count()
        ];
    }

    public function cardStats(int $deckId, int $gameLimit, ?int $userId)
    {
        $gameIds = $this->newQuery()
            ->select('id')
            ->whereDeckId($deckId)
            ->when($userId, fn($query) => $query->whereUserId($userId))
            ->limit($gameLimit)
            ->pluck('id')
            ->toArray();

        return (new GameCard)->newQuery()
            ->selectRaw('card_id, SUM(pitched) AS pitched, SUM(played) AS played, SUM(blocked) AS blocked, SUM(seen) AS seen, cards.name, cards.stats')
            ->join('cards', 'cards.id', 'game_cards.card_id')
            ->whereIn('game_id', $gameIds)
            ->groupBy('card_id')
            ->orderBy('cards.name')
            ->get();
    }
}
