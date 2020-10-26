import _ from 'underscore';

export default {
    computed: {
        attacksPerHand() {
            return (this.totalAttacks / (this.totalOther / 4)).toFixed(1);
        },

        averageAttack() {
            return (_.reduce(this.attacks, (total, card) => { return total + (card.stats.attack * card.total); }, 0) / this.totalAttacks).toFixed(1);
        },

        averageBlock() {
            return (_.reduce(this.blocks, (total, card) => { return total + card.stats.defense * card.total; }, 0) / this.totalBlocks).toFixed(1);
        },

        averageCost() {
            const totalCost = this.other.reduce((total, card) => {
                if (card.stats.cost && !isNaN(card.stats.cost)) {
                    return total + card.stats.cost * card.total;
                }

                return total;
            }, 0);

            return (this.totalOther ? (totalCost / this.totalOther) : 0).toFixed(2);
        },

        averagePitch() {
            const totalPitch = this.other.reduce((total, card) => {
                if (card.stats.resource) {
                    return total + (card.stats.resource * card.total);
                }

                return total + 0;
            }, 0);

            return (this.totalOther ? (totalPitch / this.totalOther) : 0).toFixed(2)
        },

        hero() {
            if (!this.cards) {
                return;
            }

            return this.cards.filter(card => {
                return card.keywords.includes('hero');
            })[0];
        },

        attacks() {
            return this.other.filter(card => {
                return card.keywords.includes('attack') && !card.keywords.includes('reaction');
            });
        },

        blocks() {
            return this.other.filter(card => {
                return card.stats.defense && card.stats.defense > 0;
            });
        },

        weapons() {
            return this.cards.filter(card => {
                return card.keywords.includes('weapon');
            });
        },

        equipment() {
            return this.cards.filter(card => {
                return card.keywords.includes('equipment');
            });
        },

        other() {
            const cards = this.cards.filter(card => {
                return !(card.keywords.includes('hero') || card.keywords.includes('equipment') || card.keywords.includes('weapon'));
            });

            // Sort by pitch
            return _.sortBy(cards, card => { return card.stats.resource });
        },

        totalOther() {
            return this.other.reduce((total, card) => {
                return total + card.total;
            }, 0);
        },

        totalAttacks() {
            return this.attacks.reduce((total, card) => { return total + card.total }, 0);
        },

        totalBlocks() {
            return this.blocks.reduce((total, card) => { return total + card.total }, 0);
        },

        totalClass() {
            return this.countCards(this.other.filter(card => {
                return !card.keywords.includes('generic');
            }));
        },

        totalGeneric() {
            return this.countCards(this.other.filter(card => {
                return card.keywords.includes('generic');
            }));
        },

        totalCards() {
            let count = this.other.filter(card => {
                return !card.keywords.includes('token');
            }).reduce((total, card) => {
                return total + card.total;
            }, 0);

            if (this.deck.format === 'blitz') {
                if (this.hero) {
                    count++;
                }
            }

            return count +
                this.equipment.reduce((total, card) => { return total + card.total; }, 0) +
                this.weapons.reduce((total, card) => { return total + card.total; }, 0);
        },

        totalActions() {
            return this.totalCardType(this.other, ['action']);
        },

        totalAttackActions() {
            return this.totalCardType(this.other, ['action', 'attack']);
        },

        totalAttackReactions() {
            return this.totalCardType(this.other, ['attack', 'reaction']);
        },

        totalDefenseReactions() {
            return this.totalCardType(this.other, ['defense', 'reaction']);
        },

        totalInstants() {
            return this.totalCardType(this.other, ['instant']);
        },

        totalColoured() {
            return {
                'blue': this.countColoured('blue'),
                'yellow': this.countColoured('yellow'),
                'red': this.countColoured('red')
            }
        }
    },

    methods: {
        costCount(cost) {
            const cards = this.other.filter(card => {
                if (cost < 3) {
                    return card.stats.cost == cost;
                }

                return card.stats.cost >= cost;
            });

            return cards.reduce((total, card) => {
                return total + card.total;
            }, 0);
        },

        countColoured(colour) {
            const resources = {blue: 3, yellow: 2, red: 1};
            const cards = this.other.filter(card => { return card.stats.resource == resources[colour]});

            var count = 0;

            for (var i in cards) {
                count += cards[i].total;
            }

            return count;
        },

        pitchCount(type) {
            const cards = this.other.filter(card => {
                return card.stats.resource == type;
            });

            return cards.reduce((total, card) => {
                return total + card.total;
            }, 0);
        },

        averageCardType(cards, keywords) {
            return (this.totalCardType(cards, keywords) / cards.length).toFixed(1);
        },

        totalCardType(cards, keywords) {
            return cards.reduce((total, card) => {
                let matches = 0;

                for (let i = 0; i < keywords.length; i++) {
                    if (card.keywords.includes(keywords[i])) {
                        matches++;
                    }
                }

                if (matches < keywords.length) {
                    return total;
                }

                return total + card.total;
            }, 0);
        },

        countCards(cards) {
            return _.reduce(cards, (total, card) => { return total + card.total; }, 0);
        }
    }
};
