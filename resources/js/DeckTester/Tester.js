import _ from 'underscore';

class Tester {
    constructor(deck) {
        this.deck = deck;
        this.mainDeck = deck.cards.other();
        this.sideboard = deck.sideboard.other();
        this.hero = deck.hero;
        this.slug = deck.slug;
    }

    move(card, from, to) {
        to.add(card);
        from.remove(card);
    }

    hydrate() {
        this.mainDeck = this.mainDeck.hydrate();
        this.sideboardStack = this.sideboard.hydrate();
    }
}

export default Tester;
