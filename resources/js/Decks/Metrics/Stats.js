import {mapState} from "vuex";

export default {
    computed: {
        ...mapState('performance', ['deck', 'view', 'window']),
    },

    methods: {
        getData() {
            axios
                .get(`${this.endpoint()}?deck=${this.deck}&view=${this.view}&window=${this.window}`)
                .then((response) => {
                    this.update(response.data);
                });
        },
    },

    mounted() {
        this.getData();
    },

    watch: {
        view() {
            this.getData();
        },

        window() {
            this.getData();
        }
    }
}
