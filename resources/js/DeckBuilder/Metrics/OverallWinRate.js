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
            let first = data.first;
            let second = data.second;
            let either = data.either;

            let chartData = {

                labels: ["Wins", "Losses"],
                datasets: [
                    {
                        type: "line",
                        label: "Either",
                        borderColor: "green",
                        data: either
                    },
                    {
                        label: "1st",
                        backgroundColor: "blue",
                        data: first
                    },
                    {
                        label: "2nd",
                        backgroundColor: "red",
                        data: second
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
                .get("/deck/overall-win-rate?deck="+deck)
                .then((response) => {
                    this.update(response.data);
                });
        },
    },

    mounted() {
        this.getData(this.slug);
    },
};
