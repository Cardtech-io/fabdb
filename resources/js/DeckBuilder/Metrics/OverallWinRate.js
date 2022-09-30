import { Bar, mixins } from "vue-chartjs";
import _, { update } from "lodash";
import Strings from "../../Utilities/Strings.js";

export default {
    extends: Bar,
    props: {
        slug: {
            required: true,
            type: String
        }
    },
    mixins: [Strings],
    methods: {
        update(data) {
            let won = data.won;
            let lost = data.lost;
            let either = data.either;

            let chartData = {

                labels: ["Went first", "Went second"],
                datasets: [
                    {
                        type: "line",
                        label: "Either",
                        borderColor: localStorage.getItem('darkMode') === 'true' ? 'white' : 'black',
                        data: either,
                        fill: false
                    },
                    {
                        label: "Won",
                        backgroundColor: "rgb(20 184 166)",
                        data: won
                    },
                    {
                        label: "Lost",
                        backgroundColor: "rgb(249 115 22)",
                        data: lost
                    }
                ]
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
                fill: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: localStorage.getItem('darkMode') === 'true' ? 'white' : 'black',
                        },
                        gridLines: {
                            display: false
                        },
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: localStorage.getItem('darkMode') === 'true' ? 'white' : 'black',
                            stepSize: 20,
                            suggestedMin: 0,
                        }
                    }]
                }
            });
        },
        getData(deck) {
            axios
                .get("/games/overall-win-rate?deck="+deck)
                .then((response) => {
                    this.update(response.data);
                });
        },
    },

    mounted() {
        this.getData(this.slug);
    },
};
