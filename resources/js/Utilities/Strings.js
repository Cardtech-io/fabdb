import marked from 'marked';
import showdown from './Markdown/showdown';

export default {
    methods: {
        kebabCase: function (string) {
            return this.snakeCase(string, '-');
        },

        parseMarkdown: function(string) {
            return showdown(string);
        },

        minimalMarkdown: function(string) {
            return showdown(string);
        },

        prettyText: function(text) {
            function chunk(arr, len) {
                var chunks = [],
                    i = 0,
                    n = arr.length;

                while (i < n) {
                    chunks.push(arr.slice(i, i += len));
                }

                return chunks;
            }

            let content = this.prettified(text);

            return this.parseMarkdown(content);
        },

        prettified: function(text) {
            let content = text.split('\n');

            content = content.map(function(line) {
                let regex = new RegExp(/\[([+-])?(([X0-9]{1})\s)?([a-z]+)\]/);

                while (true) {
                    let matches = regex.exec(line);

                    if (!matches) {
                        return line;
                    }

                    let modifier = matches[1];
                    let amount = matches[3];
                    let effect = matches[4];
                    let string = '';

                    if (modifier) {
                        string = modifier + amount + '<img src="/img/' + effect + '.png" class="inline-block h-5 align-middle">';
                    } else if (amount) {
                        for (let x = 0; x < amount; x++) {
                            string += '<img src="/img/' + effect + '.png" class="inline-block h-5">';
                        }
                    } else {
                        string += '<img src="/img/' + effect + '.png" class="inline-block h-5">';
                    }

                    line = line.replace(matches[0], string, line);
                }
            });

            return content.join('\n');
        },

        snakeCase: function (string, delimiter) {
            if (!delimiter) delimiter = '_';

            return string.toLowerCase().replace(/[^0-9a-z\s]+/g, '').replace(/\s+/g, delimiter);
        },

        ucfirst: function(string) {
            return string[0].toUpperCase() + string.slice(1);
        },

        imageDomain: function() {
            return window.settings.imageDomain;
        }
    }
};
