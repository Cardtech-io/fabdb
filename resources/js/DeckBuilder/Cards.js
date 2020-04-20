import _ from 'underscore';

export default class Cards {
    constructor(cards) {
        this.cards = cards;
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

    group(field) {
        return new Cards(Object.values(_.groupBy(this.cards, card => { return card[field]; })));
    }

    concat(cards) {
        return new Cards(this.cards.concat(cards));
    }

    remove(card) {
        const deckCard = this.find(card);
        
        if (deckCard.total > 1) {
            deckCard.total -= 1;
            console.log('updating total');
        } else {
            console.log('removing');
            let key = this.findKey(card);
            console.log('key found');
            if (key) {
                this.cards.splice(key, 1);
            }
        }
    }

    [Symbol.iterator]() {
        return this.cards.values();
    }
};
