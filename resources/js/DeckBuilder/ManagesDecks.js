export default {
    methods: {
        addRemote(card, handler) {
            return axios.post('/decks/' + this.$route.params.deck, { card: card.identifier })
                .then(response => {
                    if (typeof handler === 'function') {
                        handler(response);
                    }
                })
                .catch(error => {
                    if (error.response && error.response.status === 422) {
                        this.addMessage({ status: 'error', message: error.response.data.errors.card[0] });
                    }
                });
        },

        addLocal(card) {
            const deckCard = this.findCard(card);

            if (deckCard) {
                deckCard.total += 1;
            } else {
                card.total = 1;
                this.cards.push(card);
            }
        },

        copyShareURL() {
            this.$copyText('https://fabdb.net/decks/' + this.deck.slug);
            this.addMessage({ status: 'success', message: 'URL copied to clipboard.' });
        },

        removeLocal(card) {
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

        removeRemote(card, handler) {
            return axios.delete('/decks/' + this.$route.params.deck + '/' + card.identifier).then(response => {
                if (handler) {
                    handler(response);
                }
            })
            .catch(error => {
                if (error.response && error.response.status == 422) {
                    this.addMessage({ status: 'error', message: error.response.data.errors.card[0] });
                }
            });
        },

        setRemote(card, total, handler) {
            return axios.put('/decks/' + this.$route.params.deck + '/' + card.identifier, { card: card.identifier, total }).then(response => {
                if (handler) {
                    handler(response);
                }
            })
            .catch(error => {
                if (error.response && error.response.status == 422) {
                    this.addMessage({ status: 'error', message: error.response.data.errors.card[0] });
                }
            });
        },

        findCard(card) {
            return this.cards.filter(function (deckCard) {
                return deckCard.identifier === card.identifier;
            })[0];
        }
    }
};
