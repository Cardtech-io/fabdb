export default {
    methods: {
        addRemote: function(card) {
            let request = axios.post('/decks/' + this.$route.params.deck, { card: card.identifier });

            request.then(response => {
                this.addMessage({ status: 'success', message: 'Card added.' });
            });

            request.catch(error => {
                if (error.response.status == 422) {
                    this.addMessage({ status: 'error', message: error.response.data.errors.card[0] });
                }
            });

            return request;
        },

        addLocal: function(card) {
            const deckCard = this.findCard(card);

            if (deckCard) {
                deckCard.total += 1;
            } else {
                card.total = 1;
                this.cards.push(card);
            }
        },

        removeLocal: function(card) {
            const deckCard = this.findCard(card);

            if (deckCard.total > 1) {
                deckCard.total -= 1;
            } else {
                // Need to remove from array completely
                let key = null;

                for (let i in this.cards) {
                    let match = this.cards[i];

                    if (match.identifier == card.identifier) {
                        key = i;
                        break;
                    }
                }

                if (key) {
                    this.cards.splice(key, 1);
                }
            }
        },

        removeRemote: function(card) {
            return axios.delete('/decks/' + this.$route.params.deck + '/' + card.identifier + '/');
        },

        findCard: function (card) {
            return this.cards.filter(function (deckCard) {
                return deckCard.identifier === card.identifier;
            })[0];
        }
    }
};
