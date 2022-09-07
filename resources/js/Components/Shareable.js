export default{
    methods: {
        copyToClipboard(text, message) {
            this.$copyText(text);
            this.addMessage({status: 'success', message});
        },
        
        shareDeckViaText(deck) {
            const weapons = deck.cards.weapons().all().map(weapon => weapon.name).join(', ');
            const equipment = deck.cards.equipment().all().map(item => item.name).join(', ');
            
            let text = this.shareLine('Deck build - via https://fabdb.net :') +
                this.shareLine('') +
                this.shareLine(this.deck.name + ' ('+deck.hero.name+')') +
                this.shareLine('') +
                this.shareLine('Weapons: ' + weapons) +
                this.shareLine('Equipment: ' + equipment) +
                this.shareLine('');

            let other = deck.other;

            for (let i in other.all()) {
                let card = other.all()[i];
                let cardText = + '[' + card.total + '] ' + card.name;
                
                if (!isNaN(card.stats.resource)) {
                    cardText = cardText + ' (' + this.ucfirst(this.colourToText(card.stats.resource)) + ')';
                }

                text = text + this.shareLine(cardText);
            }
            
            text = text + this.shareLine('');
            text = text + this.shareLine('See the full deck at: https://fabdb.net/decks/' + this.deck.slug);

            this.copyToClipboard(text, 'Deck build copied to clipboard.');
        },

        shareLine(text) {
            return text + "\n";
        }
    }
};
