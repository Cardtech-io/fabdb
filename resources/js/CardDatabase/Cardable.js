export default {
    methods: {
        cardUrl: function(identifier, width) {
            const parts = identifier.match(/.{3}/g)
            const set = parts[0].toLowerCase();
            const id = parts[1].replace(/^0+/, '');

            return '//fabdb.imgix.net/cards/' + set +'/' + id + '.png?w=' + width + '&fit=clip&auto=compress&trim=color&trim-color=black';
        },

        resourceColour: function(resource) {
            const colours = {1: 'red-600', 2: 'yellow-300', 3: 'blue-400'};
            const colour = colours[resource];

            if (colour) {
                return 'bg-' + colour;
            }
        },

        colourToText: function(resource) {
            const colours = {1: 'red', 2: 'yellow', 3: 'blue'};

            return colours[resource];
        },

        ucfirst: function(string) {
            return string[0].toUpperCase() + string.slice(1);
        }
    }
};
