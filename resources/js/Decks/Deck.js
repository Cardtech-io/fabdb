import Cards from "../DeckBuilder/Cards";

class Deck {
    constructor(fields) {
        this.fields = fields;
    }

    get name() {
        return this.fields.name;
    }

    get cards() {
        return new Cards(this.fields.cards);
    }

    get hero() {
        return this.cards.hero();
    }

    get format() {
        return this.fields.format;
    }

    get slug() {
        return this.fields.slug;
    }
}

export default Deck;
