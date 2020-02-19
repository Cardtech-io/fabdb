export default {
    methods: {
        kebabCase: function (string) {
            return this.snakeCase(string, '-');
        },

        snakeCase: function (string, delimiter) {
            if (!delimiter) delimiter = '_';

            return string.toLowerCase().replace(/[^0-9a-z\s]+/g, '').replace(/\s+/g, delimiter);
        }
    }
};
