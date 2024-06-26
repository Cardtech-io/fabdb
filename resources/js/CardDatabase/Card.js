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

    get sku() {
        return this.fields.sku;
    }

    get subTypes() {
        return this.fields.subTypes ?? [];
    }

    get stats() {
        return this.fields.stats;
    }

    get keywords() {
        return this.fields.keywords;
    }

    get total() {
        return this.fields.total;
    }

    avatar() {
        let name = this.name.split(',')[0].toLowerCase().split(' ')[0];

        if (this.young()) {
            return name + '-blitz';
        }

        return name;
    }

    young() {
        return this.subTypes.includes('young');
    }
}

export default Card;
