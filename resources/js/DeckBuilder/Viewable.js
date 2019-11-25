export default {
    computed: {
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

        totalCards: function() {
            var count = 0;

            for (var i in this.other) {
                count += this.other[i].total;
            }

            return count;
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
        }
    }
};
