import Carding from '../Carding';

let matches = [];
let lastAlignment = 'left';
let alignmentClasses = {
    left: 'sm:float-left sm:m-4 sm:ml-0',
    right: 'sm:float-right sm:m-4 sm:mr-0',
};

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
                    return '<card-ad identifier="' + cardIdentifier + '"></card-ad>';
                });

                let pat = '%CARDS' + i + '%';

                // Here we are moving and positioning the card in the article.
                if (identifiers.length === 1) {
                    let alignment = lastAlignment === 'right' ? 'left' : 'right';
                    let classes = alignmentClasses[alignment];

                    lastAlignment = alignment;
                } else {
                    let classes = 'flex items-start justify-center';
                }

                text = text.replace(new RegExp(pat, 'gi'), '<div class="'+classes+'">' + cards.join('\n') + '</div>');
            }

            //reset array
            matches = [];

            return text;
        }
    }
];
