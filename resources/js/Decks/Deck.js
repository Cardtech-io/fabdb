import Cards from "../DeckBuilder/Cards";

class Deck {
    constructor(fields) {
        this.fields = fields;
    }

    get name() {
        return this.fields.name;
    }

    get notes() {
        return this.fields.notes;
    }

    get cards() {
        return new Cards(this.fields.cards);
    }

    get hero() {
        return this.cards.hero();
    }

    get weapons() {
        return this.cards.weapons();
    }

    get equipment() {
        return this.cards.equipment();
    }

    get other() {
        return this.cards.other();
    }

    get format() {
        return this.fields.format;
    }

    get slug() {
        return this.fields.slug;
    }
}

export default Deck;
