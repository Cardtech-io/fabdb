import marked from 'marked';

export default {
    methods: {
        parseMarkdown: function(string) {
            const renderer = new marked.Renderer();

            renderer.paragraph = function(text) {
                return '<p class="my-4">' + text + '</p>';
            };

            renderer.link = function(href, title, text) {
                return '<a href="' + href + '" title="' + title + '" class="link">' + text + '</a>';
            };

            // First we're gonna search for custom syntax
            let content = string.split('\n').map(line => {
                let regexp = /^#\[cards\]\((([A-Z]{3}[0-9]{3},?)+)\)/;
                let matches = line.match(regexp);

                if (!matches) {
                    return line;
                }

                let identifiers = matches[1].split(',');

                let cards = identifiers.map(cardIdentifier => {
                    return '<img src="' + this.cardUrl(cardIdentifier, 300) + '" class="inline-block sm:mr-8 rounded-lg sm:rounded-xl my-4">';
                });

                return '<div class="text-center">' + cards.join('\n') + '</div>';
            });

            return marked(content.join('\n'), { renderer: renderer });
        }
    }
};
