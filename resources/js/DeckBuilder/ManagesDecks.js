export default {
    methods: {
        addCard: function (card) {
            let request = axios.post('/decks/' + this.$route.params.deck, { card: card.identifier }).then(response => {
                const deckCard = this.findCard(card);
                console.log('now');

                if (deckCard) {
                    deckCard.total += 1;
                } else {
                    card.total = 1;
                    this.cards.push(card);
                }

                this.addMessage({ status: 'success', message: 'Card added.' });
            }).catch(error => {
                if (error.response.status == 422) {
                    this.addMessage({ status: 'error', message: error.response.data.errors.card[0] });
                }
            });

            return request;
        },

        removeCard: function (card) {
            const deckCard = this.findCard(card);

            if (deckCard.total > 1) {
                deckCard.total -= 1;
            } else {
                // Need to remove from array completely
                var key = null;

                for (var i in this.cards) {
                    var match = this.cards[i];

                    if (match.identifier == card.identifier) {
                        key = i;
                        break;
                    }
                }

                if (key) {
                    this.cards.splice(key, 1);
                }
            }

            return axios.delete('/decks/' + this.$route.params.deck + '/' + card.identifier + '/');
        },

        findCard: function (card) {
            return this.cards.filter(function (deckCard) {
                return deckCard.identifier === card.identifier;
            })[0];
        }
    }
};
