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
            return card.keywords.includes('hero');
        })[0];
    }

    weapons() {
        return this.cards.filter(card => {
            return card.keywords.includes('weapon');
        });
    }

    equipment() {
        return this.cards.filter(card => {
            return card.keywords.includes('equipment');
        });
    }

    other() {
        let cards = this.cards.filter(card => {
            return !(card.keywords.includes('hero') || card.keywords.includes('equipment') || card.keywords.includes('weapon'));
        });

        // Sort by pitch
        return _.sortBy(cards, card => { return card.stats.resource });
    }

    filter(handler) {
        return new Cards(this.cards.filter(handler));
    }

    find(card) {
        return this.cards.filter(deckCard => {
            return deckCard.identifier == card.identifier;
        })[0];
    }

    findKey(card) {
        for (let i in this.cards) {
            let match = this.cards[i];

            if (match.identifier == card.identifier) {
                return i;
            }
        }
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

    add(card) {
        const deckCard = this.find(card);

        if (deckCard) {
            deckCard.total += 1;
        } else {
            card.total = 1;
            this.cards.push(card);
        }
    }

    // Field could be a string, or a handler
    group(field) {
        let handler = typeof field === 'string' ? (card) => { return card[field]; } : field;

        return new Cards(Object.values(_.groupBy(this.cards, handler)));
    }

    concat(cards) {
        return new Cards(this.cards.concat(cards));
    }

    remove(card) {
        const deckCard = this.find(card);

        if (deckCard.total > 1) {
            deckCard.total -= 1;
        } else {
            let key = this.findKey(card);

            if (key) {
                this.cards.splice(key, 1);
            }
        }
    }

    all() {
        return this.cards;
    }

    [Symbol.iterator]() {
        return this.cards.values();
    }
};
