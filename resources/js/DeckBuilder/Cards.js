import _ from 'underscore';

export default class Cards {
    constructor(cards) {
        this.cards = cards;
    }

    applyFilters(filters) {
        return new Cards(this.cards.filter(card => {
            if (filters.indexOf('actions') > -1 && this.isAction(card) ) {
                return true;
            }

            if (filters.indexOf('attacks') > -1 && this.isAttack(card) ) {
                return true;
            }

            if (filters.indexOf('attackReactions') > -1 && this.isAttackReaction(card)) {
                return true;
            }

            if (filters.indexOf('instants') > -1 && this.isInstant(card)) {
                return true;
            }

            if (filters.indexOf('defenseReactions') > -1 && this.isDefenseReaction(card)) {
                return true;
            }

            return false;
        }));
    }

    isAction(card) {
        return card.keywords.includes('action') && !card.keywords.includes('attack');
    }

    isAttack(card) {
        return card.keywords.includes('attack') && !card.keywords.includes('reaction');
    }

    isAttackReaction(card) {
        return card.keywords.includes('attack') && card.keywords.includes('reaction');
    }

    isDefenseReaction(card) {
        return card.keywords.includes('defense') && card.keywords.includes('reaction');
    }

    isInstant(card) {
        return card.keywords.includes('instant');
    }

    hero() {
        return this.cards.filter(card => {
            return card.type === 'hero';
        })[0];
    }

    miscellaneous() {
        return new Cards(this.cards.filter(card => {
            return card.keywords.includes('resource');
        }));
    }

    attackActions() {
        return new Cards(this.cards.filter(card => {
            return this.isAttack(card);
        }));
    }

    nonAttackActions() {
        return new Cards(this.cards.filter(card => {
            return this.isAction(card);
        }));
    }

    attackReactions() {
        return new Cards(this.cards.filter(card => {
            return this.isAttackReaction(card);
        }));
    }

    defenseReactions() {
        return new Cards(this.cards.filter(card => {
            return this.isDefenseReaction(card);
        }));
    }

    weapons() {
        return new Cards(this.cards.filter(card => {
            return card.keywords.includes('weapon');
        }));
    }

    equipment() {
        return new Cards(this.cards.filter(card => {
            return card.keywords.includes('equipment');
        }));
    }

    items() {
        return new Cards(this.cards.filter(card => {
            return card.keywords.includes('item');
        }));
    }

    instants() {
        return new Cards(this.cards.filter(card => {
            return this.isInstant(card);
        }));
    }

    colouredCount(colour) {
        const resources = {blue: 3, yellow: 2, red: 1};

        return this.filter(card => {
            return card.stats.resource && card.stats.resource == resources[colour]
        }).total();
    }

    other() {
        let cards = this.cards.filter(card => {
            return !(card.keywords.includes('hero') || card.keywords.includes('equipment') || card.keywords.includes('weapon'));
        });

        // Sort by pitch
        return new Cards(_.sortBy(cards, card => { return card.stats.resource }));
    }

    deck() {
        return this.other();
    }

    withCost() {
        return this.other().filter(card => !isNaN(card.stats.cost));
    }

    withResource() {
        return this.other().filter(card => !isNaN(card.stats.resource));
    }

    withDefense() {
        return this.other().filter(card => !isNaN(card.stats.defense));
    }

    withPower() {
        return this.deck().filter(card => !isNaN(card.stats.attack));
    }

    sort() {
        return new Cards(_.sortBy(this.cards, card => {
            let resource = card.stats ? card.stats.resource : '';
            return card.name + resource;
        }));
    }

    filter(handler) {
        return new Cards(this.cards.filter(handler));
    }

    reduce(handler, carry) {
        return this.cards.reduce(handler, carry);
    }

    find(card) {
        return this.cards.filter(deckCard => {
            return deckCard.identifier === card.identifier;
        })[0];
    }

    findKey(card) {
        for (let i in this.cards) {
            let match = this.cards[i];

            if (match.identifier === card.identifier) {
                return i;
            }
        }

        return false;
    }

    hydrate() {
        let reducer = (carry, card) => {
            for (let i = 0; i < card.total; i++) {
                carry.push(card);
            }

            return carry;
        };

        return new Cards(this.cards.reduce(reducer, []));
    }

    total() {
        return this.cards.reduce((carry, card) => {
            return carry + card.total;
        }, 0);
    }

    deckTotal(format) {
        return format === 'constructed' ? this.total() - 1 : this.total();
    }

    count() {
        return this.cards.length;
    }

    add(card) {
        const deckCard = this.find(card);

        if (deckCard) {
            deckCard.total += 1;
        } else {
            // clone the card before setting total
            card = JSON.parse(JSON.stringify(card));
            card.total = 1;

            this.cards.push(card);
        }
    }

    // Field could be a string, or a handler
    group(field) {
        let handler = typeof field === 'string' ? card => card[field] : field;

        return new Cards(Object.values(_.groupBy(this.cards, handler)));
    }

    concat(cards) {
        cards = cards instanceof Cards ? cards.all() : cards;
        return new Cards(this.cards.concat(cards));
    }

    remove(card) {
        const deckCard = this.find(card);

        if (deckCard && deckCard.total > 1) {
            deckCard.total -= 1;
        } else {
            let key = this.findKey(card);

            if (key !== false) {
                this.cards.splice(key, 1);
            }
        }

        return this;
    }

    all() {
        return this.cards;
    }

    each(handler) {
        this.cards.forEach(handler);
    }

    [Symbol.iterator]() {
        return this.cards.values();
    }
};
