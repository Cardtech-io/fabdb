import Carding from '../Carding';

let matches = [];

export default [
    {
        type: 'lang',
        regex: /\^cards\((([A-Z]{3}[0-9]{3},?)+)\)/gi,
        replace: function(s, match) {
            matches.push(match);
            let n = matches.length - 1;
            return '%CARDS' + n + '%';
        }
    },
    {
        type: 'output',
        filter: function (text) {
            for (let i = 0; i < matches.length; ++i) {
                let identifiers = matches[i].split(',');
                let cards = identifiers.map(cardIdentifier => {
                    return '<img src="' + Carding.cardUrl(cardIdentifier, 450, true) + '" class="inline-block sm:mr-8 rounded-lg sm:rounded-xl my-4" style="max-width: 350px">';
                });

                let pat = '%CARDS' + i + '%';

                text = text.replace(new RegExp(pat, 'gi'), '<div class="text-center">' + cards.join('\n') + '</div>');
            }

            //reset array
            matches = [];

            return text;
        }
    }
];
