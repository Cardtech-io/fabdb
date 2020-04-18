import _ from 'underscore';

export default {
    computed: {
        averageCost: function() {
            const totalCost = this.other.reduce((total, card) => {
                if (card.stats.cost) {
                    return total + card.stats.cost * card.total;
                }

                return total;
            }, 0);

            return (totalCost / this.totalOther).toFixed(2);
        },

        averagePitch: function() {
            const totalPitch = this.other.reduce((total, card) => {
                return total + (card.stats.resource * card.total);
            }, 0);

            return (totalPitch / this.totalOther).toFixed(2);
        },

        hero: function() {
            return this.cards.filter(card => {
                return card.keywords.includes('hero');
            })[0];
        },

        weapons: function() {
            return this.cards.filter(card => {
                return card.keywords.includes('weapon');
            });
        },

        equipment: function() {
            return this.cards.filter(card => {
                return card.keywords.includes('equipment');
            });
        },

        other: function() {
            const cards = this.cards.filter(card => {
                return !(card.keywords.includes('hero') || card.keywords.includes('equipment') || card.keywords.includes('weapon'));
            });

            // Sort by pitch
            return _.sortBy(cards, card => { return card.stats.resource });
        },

        totalOther: function() {
            return this.other.reduce((total, card) => {
                return total + card.total;
            }, 0);
        },

        totalCards: function() {
            let count = this.other.filter(card => {
                return !card.keywords.includes('token');
            }).reduce((total, card) => {
                return total + card.total;
            }, 0);
            
            return count +
                this.equipment.reduce((total, card) => { return total + card.total; }, 0) +
                this.weapons.reduce((total, card) => { return total + card.total; }, 0);
        },

        totalAttackActions: function() {
            return this.totalCardType(this.other, ['action', 'attack']);
        },

        totalAttackReactions: function() {
            return this.totalCardType(this.other, ['attack', 'reaction']);
        },

        totalDefenseReactions: function() {
            return this.totalCardType(this.other, ['defense', 'reaction']);
        },

        totalColoured: function() {
            return {
                'blue': this.countColoured('blue'),
                'yellow': this.countColoured('yellow'),
                'red': this.countColoured('red')
            }
        }
    },

    methods: {
        costCount: function(cost) {
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

        countColoured: function(colour) {
            const resources = {blue: 3, yellow: 2, red: 1};
            const cards = this.other.filter(card => { return card.stats.resource == resources[colour]});

            var count = 0;

            for (var i in cards) {
                count += cards[i].total;
            }

            return count;
        },

        pitchCount: function(type) {
            const cards = this.other.filter(card => {
                return card.stats.resource == type;
            });

            return cards.reduce((total, card) => {
                return total + card.total;
            }, 0);
        },

        totalCardType: function(cards, keywords) {
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

        countCards: function(cards) {
            return _.reduce(cards, (total, card) => { return total + card.total; }, 0);
        }
    }
};
