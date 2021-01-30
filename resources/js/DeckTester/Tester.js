class Tester {
    constructor(deck) {
        this.deck = deck.cards.other();
        this.sideboard = deck.sideboard.other();
        this.hero = deck.hero;
    }

    hydrate() {
        this.deck = this.deck.hydrate();
        this.sideboard = this.sideboard.hydrate();
    }
}

export default Tester;
