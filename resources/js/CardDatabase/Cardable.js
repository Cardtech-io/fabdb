export default {
    methods: {
        cardUrl: function(identifier, width, withBorder) {;
            const set = this.set(identifier);
            const id = this.id(identifier);

            const dimensions = {
                ira: [23, 24, 419, 603],
                wtr: [22, 22, 406, 584]
            };

            var rect = dimensions[set].join(',');

            let url = window.location.protocol + '//fabdb.imgix.net/cards/' + set + '/' + id + '.png?w=' + width + '&fit=clip&auto=compress';

            if (!withBorder) {
                url += '&rect=' + rect;
            }

            return url;
        },

        resourceColour: function(resource) {
            const colours = {1: 'red-600', 2: 'yellow-300', 3: 'blue-400'};
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
            return card.stats.hasOwnProperty('resource');
        },

        set: function(identifier) {
            return this.identifierParts(identifier)[0].toLowerCase();
        },

        setToString: function(set) {
            const sets = {
                ira: "Welcome Deck 2019",
                wtr: "Welcome to Rathe"
            };

            return sets[set];
        }
    }
};
