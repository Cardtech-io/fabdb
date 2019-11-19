export default {
    methods: {
        cardUrl: function(identifier, width) {
            const parts = identifier.match(/.{3}/g)
            const set = parts[0].toLowerCase();
            const id = parts[1].replace(/^0+/, '');

            return '//fabdb.imgix.net/cards/' + set +'/' + id + '.png?w=' + width + '&fit=clip&auto=compress';
        }
    }
};
