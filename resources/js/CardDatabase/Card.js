class Card {
    constructor(fields) {
        this.fields = fields;
    }

    get name() {
        return this.fields.name;
    }

    get image() {
        return this.fields.image;
    }

    get class() {
        return this.fields.class;
    }

    get stats() {
        return this.fields.stats;
    }

    get keywords() {
        return this.fields.keywords;
    }

    avatar() {
        let name = this.name().split(',')[0].toLowerCase().split(' ')[0];

        if (this.young()) {
            return name + '-blitz';
        }

        return name;
    }

    young() {
        return this.fields.subType === 'young';
    }
}

export default Card;
