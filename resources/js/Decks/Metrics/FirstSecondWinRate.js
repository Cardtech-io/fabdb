import { Bar, mixins } from "vue-chartjs";
import Stats from "./Stats";
import Strings from "../../Utilities/Strings.js";

export default {
    extends: Bar,
    props: {
        slug: {
            required: true,
            type: String
        }
    },
    mixins: [Stats, Strings],
    methods: {
        calcAvg(value, total) {
            return Math.round(((value / total) * 100) * 1e1) / 1e1;
        },

        update(data) {
            let won = [
                this.calcAvg(data.wonFirst, data.totalFirst),
                this.calcAvg(data.wonSecond, data.totalSecond)
            ];

            let lost = [
                this.calcAvg(data.totalFirst - data.wonFirst, data.totalFirst),
                this.calcAvg(data.totalSecond - data.wonSecond, data.totalSecond)
            ];

            let either = [
                (won[0] + won[1]) / 2,
                (lost[0] + lost[1]) / 2
            ];

            let chartData = {
                labels: ["Went first", "Went second"],

                datasets: [
                    {
                        type: "line",
                        label: "Either",
                        borderColor: localStorage.getItem('darkMode') === 'true' ? 'white' : 'black',
                        data: either,
                        fill: false,
                    },
                    {
                        label: "Won",
                        backgroundColor: "rgb(20 184 166)",
                        data: won,
                    },
                    {
                        label: "Lost",
                        backgroundColor: "rgb(249 115 22)",
                        data: lost,
                    }
                ]
            };

            this.renderChart(chartData, {
                legend: {
                    display: true,
                    position: this.$mq === 'sm' ? 'top' : 'right',
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            steps: 10,
                            stepValue: 10,
                            max: 100
                        }
                    }]
                },
                tooltips: {
                    callbacks: {
                        label(context) {
                            return " "+context.yLabel + "%";
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                fill: false,
            });
        },

        endpoint() {
            return '/games/overall-win-rate';
        }
    }
};
