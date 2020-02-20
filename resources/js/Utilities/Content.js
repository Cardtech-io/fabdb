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
            let regexp = /#\[cards\]\((([A-Z]{3}[0-9]{3},?)+)\)/g;
            let identifiers = [...string.matchAll(regexp)][0][1];
            let cards = identifiers.split(',').map(cardIdentifier => {
                return '<img src="' + this.cardUrl(cardIdentifier, 300) + '" class="inline-block sm:mr-8 rounded-lg sm:rounded-xl my-4">';
            });

            let content = '<div class="text-center">' + cards.join('\n') + '</div>';

            string = string.replace('#[cards](' + identifiers + ')', content);

            return marked(string, { renderer: renderer });
        },

        newParser: function(string) {
            const renderer = new marked.Renderer();

            renderer.paragraph = function(text) {
                return '<p class="my-4">' + text + '</p>';
            };

            renderer.link = function(href, title, text) {
                return '<a href="' + href + '" title="' + title + '" class="link">' + text + '</a>';
            };

            // First we're gonna search for custom syntax
            // let regexp = /#\[cards\]\((([A-Z]{3}[0-9]{3},?)+)\)/g;
            // let identifiers = [...string.matchAll(regexp)][0][1];
            // let cards = identifiers.split(',').map(cardIdentifier => {
            //     return '<img src="' + this.cardUrl(cardIdentifier, 300) + '" class="inline-block sm:mr-8 rounded-lg sm:rounded-xl my-4">';
            // });
            //
            // alert(cards);

            // let content = '<div class="text-center">' + cards.join('\n') + '</div>';
            //
            // alert(content);

            // string = string.replace('#[cards](' + identifiers + ')', content);

            return marked(string, { renderer: renderer });
        }
    }
};
