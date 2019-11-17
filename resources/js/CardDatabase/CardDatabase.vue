<template>
    <div>
        <div class="border-gray-800 rounded-lg border p-4">
            <input type="text" v-model="searchText" placeholder="Search" class="rounded p-4 bg-black focus:outline-none w-full">
        </div>
        <div class="border-gray-800 rounded-lg border my-8 clearfix mh-10">
            <ul>
                <li v-for="card in cards" class="float-left p-4 pb-8 w-1/2 sm:w-1/3 lg:w-1/4">
                    <a href=""><img :src="cardUrl(card.identifier.id)" :alt="card.name" class="w-full"></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return {
                cards: null,
                searchText: this.$route.query.search
            }
        },
        mounted() {
            this.search();
        },
        methods: {
            cardUrl: function(cardId) {
                const id = cardId.replace(/^0+/, '');

                return '//fabdb.imgix.net/cards/wtr/' + id + '.png?w=250&fit=clip';
            },
            filterCards: function() {
                this.$router.push({path: '/', query: {search: this.searchText}});

                this.cards = [];

                if (!this.searchText) {
                    return;
                }

                this.search();
            },
            search: function() {
                axios.get('/cards?search=' + this.$route.query.search).then(response => (this.cards = response.data.data));
            }
        },
        watch: {
            searchText: function() {
                this.debouncedFilterCards();
            }
        },
        created: function() {
            this.debouncedFilterCards = _.debounce(this.filterCards, 750);
        }
    };
</script>
