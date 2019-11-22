import CardItem from './CardItem.vue';
import Paginator from './Paginator.vue';

export default {
    components: {
        CardItem,
        Paginator
    },

    data() {
        return {
            cards: null,
            results: null,
            page: 1,
            searchText: this.$route.query.search
        }
    },
    mounted() {
        this.search();
    },
    methods: {
        filterCards: function() {
            this.$router.push({path: this.$route.path, query: {search: this.searchText, page: this.page}});

            this.cards = [];

            this.search();
        },
        search: function() {
            const terms = this.$route.query.search;

            axios.get(this.url, {params: this.$route.query}).then(response => {
                this.cards = response.data.data;
                this.results = response.data;
            }).catch(error => {});
        },
        updatePage: function(page) {
            this.page = page;
            this.filterCards();
        }
    },
    watch: {
        searchText: function() {
            this.page = 1;
            this.debouncedFilterCards();
        }
    },
    created: function() {
        this.debouncedFilterCards = _.debounce(this.filterCards, 750);
    }
};
