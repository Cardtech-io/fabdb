class Card {
    constructor(fields) {
        this.fields = fields;
    }

    name() {
        return this.fields.name;
    }

    avatar() {
        let name = this.name().split(',')[0].toLowerCase().split(' ')[0];

        if (this.young()) {
            return name + '-blitz';
        }

        return name;
    }

    young() {
        return this.fields.keywords.includes('young');
    }
}

export default Card;
