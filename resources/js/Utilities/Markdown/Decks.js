import Carding from '../Carding';

let matches = [];

export default [
    {
        type: 'lang',
        regex: /\^deck\(([A-Z]+)\)/gi,
        replace: function(s, match) {
            matches.push(match);
            console.log(match);
            let n = matches.length - 1;
            return '%DECK' + n + '%';
        }
    },
    {
        type: 'output',
        filter: function (text) {
            for (let i = 0; i < matches.length; ++i) {
                let url = window.location.protocol+'//' + window.location.hostname + '/decks/embed/' + matches[i];
                let pat = '<p>%DECK' + i + '% *<\/p>';
                let replace = '<div class="block sm:m-8 mt-0 sm:float-right border border-gray-400">' +
                    '<iframe src="'+url+'" width="350" height="1200" id="deck-'+i+'" sandbox="allow-same-origin allow-scripts" scrolling="yes"></iframe>' +
                    '</div>';

                text = text.replace(new RegExp(pat, 'gi'), replace);
            }

            //reset array
            matches = [];

            return text;
        }
    }
];
