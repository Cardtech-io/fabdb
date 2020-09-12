export default {
    methods: {
        cardUrl: function(identifier, width, withBorder) {
            const set = this.setFromIdentifier(identifier);
            const id = this.id(identifier);

            let url = window.location.protocol + '//' + window.settings.imageDomain + '/cards/' + set + '/' + id + '.png?w=' + width + '&fit=clip&auto=compress';

            if (!withBorder) {
                const rect = this.$settings.game.img_crop.join(',');

                url += '&rect=' + rect;
            }

            return url;
        },

        maxCards(deck) {
            return deck.format === 'blitz' ? 52 : 80;
        },

        resourceColour: function(resource) {
            const colours = {1: 'red-600', 2: 'yellow-400', 3: 'blue-400'};
            const colour = colours[resource];

            if (colour) {
                return 'bg-' + colour;
            }
        },

        resourceColourLight: function(resource) {
            const colours = {1: 'red-100', 2: 'yellow-100', 3: 'blue-100'};
            const colour = colours[resource];

            if (colour) {
                return 'bg-' + colour;
            }
        },

        colourToText: function(resource) {
            const colours = {1: 'red', 2: 'yellow', 3: 'blue'};

            return colours[resource];
        },

        id: function(identifier) {
            return this.identifierParts(identifier)[1].replace(/^0{1,2}/, '');
        },

        identifierParts: function(identifier) {
            return identifier.match(/.{3}/g);
        },

        ucfirst: function(string) {
            return string[0].toUpperCase() + string.slice(1);
        },

        hasResource: function(card) {
            return card.stats.hasOwnProperty('resource') && card.stats.resource > 0;
        },

        setFromIdentifier: function(identifier) {
            return this.identifierParts(identifier)[0].toLowerCase();
        },

        setToString: function(set) {
            return this.$settings.game.sets[set].name;
        }
    }
};
