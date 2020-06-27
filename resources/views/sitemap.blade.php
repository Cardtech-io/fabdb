<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>{{ url('') }}</loc>
        <lastmod>2019-12-19</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>
    <url>
        <loc>{{ url('/cards/browse') }}</loc>
        <lastmod>2020-06-20</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>{{ url('/decks/browse') }}</loc>
        <lastmod>2020-06-20</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>{{ url('/collection') }}</loc>
        <lastmod>2019-12-19</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>{{ url('/support') }}</loc>
        <lastmod>2020-06-20</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    @foreach ($decks as $deck)
        <url>
            <loc>{{ url("/decks/{$deck->slug}") }}</loc>
            <lastmod>{{ $deck->updatedAt->format('Y-m-d') }}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.5</priority>
        </url>
    @endforeach
    @foreach ($cards as $card)
        <url>
            <loc>{{ url("/cards/{$card->identifier->raw()}") }}</loc>
            <lastmod>{{ (new \Carbon\Carbon)->format('Y-m-d') }}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.5</priority>
        </url>
    @endforeach
    @foreach ($articles as $article)
        <url>
            <loc>{{ url("/articles/".\Illuminate\Support\Str::kebab($article->title).'/'.$article->slug) }}</loc>
            <lastmod>{{ $article->updatedAt->format('Y-m-d') }}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.5</priority>
        </url>
    @endforeach
</urlset>