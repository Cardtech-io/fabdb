import Cards from "../DeckBuilder/Cards";

class Deck {
    constructor(fields) {
        this.fields = fields;
    }

    get name() {
        return this.fields.name;
    }

    get authorName() {
        return this.fields.user.name || 'Anonymous';
    }

    get user() {
        return this.fields.user;
    }

    get label() {
        return this.fields.label || '';
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

    get totalCards() {
        return this.fields.totalCards || 0;
    }

    get slug() {
        return this.fields.slug;
    }
}

export default Deck;
