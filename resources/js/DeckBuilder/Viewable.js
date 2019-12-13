export default {
    computed: {
        averageCost: function() {
            const totalCost = this.other.reduce((total, card) => {
                return total + card.stats.cost * card.total;
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
            return cards.sort(function compare(a, b) {
                if (a.stats.resource < b.stats.resource) return -1;
                if (a.stats.resource > b.stats.resource) return 1;
                return 0;
            });
        },

        totalOther: function() {
            return this.other.reduce((total, card) => {
                return total + card.total;
            }, 0);
        },

        totalCards: function() {
            var count = 0;

            for (var i in this.other) {
                count += this.other[i].total;
            }

            return count + this.equipment.length + this.weapons.length;
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
        }
    }
};
