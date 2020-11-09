class Deck {
    constructor(fields) {
        this.fields = fields;
    }

    get name() {
        return this.fields.name;
    }

    get cards() {
        return this.fields.cards;
    }

    get format() {
        return this.fields.format;
    }
}

export default Deck;
