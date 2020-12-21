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
            
            if (this.card.text.toLowerCase().includes('legendary')) {
                return 1;
            }

            let limits = {blitz: 2, constructed: 3, open: 100};
            let available = limits[this.deck.format];

            if (this.deck.useCollection && this.card.ownedTotal < available) {
                available = this.card.ownedTotal;
            }

            return available;
        }
    },

    methods: {
        ...Carding
    }
};
