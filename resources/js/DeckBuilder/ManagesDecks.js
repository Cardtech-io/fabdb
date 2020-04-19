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
