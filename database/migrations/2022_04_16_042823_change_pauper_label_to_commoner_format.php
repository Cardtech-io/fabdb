<?php

use FabDB\Domain\Decks\Deck;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangePauperLabelToCommonerFormat extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Deck::whereLabel('pauper')->update(['label' => null, 'format' => 'commoner']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Deck::whereFormat('commoner')->update(['label' => 'pauper', 'format' => 'open']);
    }
}
