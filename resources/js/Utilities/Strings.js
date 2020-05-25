import marked from 'marked';

export default {
    methods: {
        kebabCase: function (string) {
            return this.snakeCase(string, '-');
        },

        _renderer: function() {
            const renderer = new marked.Renderer();

            renderer.blockquote = quote => {
                return '<blockquote class="relative py-2 px-8 my-8 text-xl italic border border-l-4 border-neutral-500 quote bg-gray-100 rounded-lg">' +
                    '<div class="stylistic-quote-mark text-gray-200" aria-hidden="true">&ldquo;</div>' +
                    '<p>' + this.prettyText(quote) + '</p>' +
                    '</blockquote>';
            };

            renderer.heading = (text, level, raw, slugger) => {
                let element = 'h' + level;
                let size = {
                    '1': 'text-2xl',
                    '2': 'text-xl',
                    '3': 'text-lg'
                };

                return '<' + element + ' class="font-serif uppercase ' + size[level] + '">' + text + '</' + element + '>';
            };

            renderer.paragraph = function(text) {
                return '<p class="my-4">' + text + '</p>';
            };

            renderer.link = function(href, title, text) {
                return '<a href="' + href + '" title="' + title + '" class="link">' + text + '</a>';
            };

            renderer.list = function(body, ordered, start) {
                return ordered ? '<ol class="list-decimal ml-8">' + body + '</ol>' : '<ul class="list-disc ml-8">' + body + '</ul>';
            };

            renderer.listitem = function(text, task, checked) {
                return '<li>' + text + '</li>';
            };

            return renderer;
        },

        parseMarkdown: function(string) {
            const renderer = this._renderer();

            // First we're gonna search for custom syntax
            let content = string.split('\n').map(line => {
                let regexp = /^#\[cards\]\((([A-Z]{3}[0-9]{3},?)+)\)/;
                let matches = line.match(regexp);

                if (!matches) {
                    return line;
                }

                let userBorders = this.user && this.user.view == 'bordered';
                let identifiers = matches[1].split(',');

                let cards = identifiers.map(cardIdentifier => {
                    return '<img src="' + this.cardUrl(cardIdentifier, 450, userBorders) + '" class="inline-block sm:mr-8 rounded-lg sm:rounded-xl my-4" style="max-width: 350px">';
                });

                return '<div class="text-center">' + cards.join('\n') + '</div>';
            });

            return marked(content.join('\n'), { renderer: renderer });
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

            return this.parseMarkdown(content.join('\n'));
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
