import Carding from "../Utilities/Carding";

export default {
    computed: {
        maxAvailable() {
            if (this.card.keywords.includes('hero')) {
                return 1;
            }

            if (this.card.keywords.includes('equipment')) {
                return 1;
            }

            if (this.card.keywords.includes('weapon')) {
                return this.card.keywords.includes('2h') ? 1 : 2;
            }

            if (this.card.text && this.card.text.toLowerCase().includes('legendary')) {
                return 1;
            }

            let limits = {blitz: 2, commoner: 2, constructed: 3, open: 7};
            let available = limits[this.deck.format];

            if (this.deck.limitToCollection === 1 && this.card.ownedTotal < available) {
                available = this.card.ownedTotal;
            }

            return available;
        }
    },

    methods: {
        ...Carding,

        buyLink(deck) {
            let cards = deck.cards.cards.map(card => {
                let name = card.total+' '+card.name;
                let color = this.colourToText(card.stats.resource);
                let cycleRarities = ['C', 'R'];

                if (card.stats.resource && card.identifier.indexOf(color) !== -1 && cycleRarities.indexOf(card.rarity) !== -1 && card.keywords.indexOf('item') === -1 && card.keywords.indexOf('trap') === -1) {
                    name +=' ('+color+')';
                }

                return encodeURI(name);
            }).join('||');

            let code = 'FABDB';

            return 'https://www.tcgplayer.com/massentry?productline=Flesh%20%26%20Blood%20TCG&utm_campaign=affiliate&utm_medium='+code+'&utm_source=cardtech&c='+cards;
        }
    }
};
