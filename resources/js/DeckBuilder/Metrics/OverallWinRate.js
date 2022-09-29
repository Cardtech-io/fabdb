import { Pie, mixins } from "vue-chartjs";
import _ from "lodash";
import Strings from "../../Utilities/Strings.js";

export default {
    extends: Pie,
    props: {
        slug: {
            required: true,
            type: String
        }
    },
    mixins: [Strings],
    methods: {
        update(data) {
            let wins = data.won;
            let totalGames = data.total_games;

            let chartData = {
                labels: ['wins', 'losses'],

                datasets: [{
                    data: [(wins*100)/totalGames, ((totalGames-wins)*100)/totalGames],
                    backgroundColor: ['red', 'blue']
                }]
            };

            this.renderChart(chartData, {
                legend: {
                    display: true,
                    labels: {
                        boxWidth: 16,
                        fontColor: localStorage.getItem('darkMode') === 'true' ? 'white' : 'black',
                    },
                    position: this.$mq === 'sm' ? 'top' : 'right',
                },
                responsive: true,
                maintainAspectRatio: false,
            });
        },
        getData(deck) {
            axios
                .get("https://fab.test/deck/" + deck + "/overall-win-rate")
                .then((response) => {
                    this.update(response.data);
                });
        },
    },

    mounted() {
        this.getData(this.slug);
    },
};
