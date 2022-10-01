import { Bar, mixins } from "vue-chartjs";
import Strings from "../../Utilities/Strings.js";
import Stats from "./Stats";

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
        update(data) {
            let chartData = {
                labels: Object.values(data.data).map(hero => hero.hero.name.split(',')[0]),
                datasets: [
                    {
                        data: Object.values(data.data).map(hero => hero.winRate),
                        backgroundColor: 'rgb(220 38 38)'
                    }
                ]
            };

            this.renderChart(chartData, {
                legend: {
                    display: false,
                },
                responsive: true,
                maintainAspectRatio: false,
                fill: false,
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
            });
        },

        endpoint() {
            return '/games/hero-win-rate';
        }
    }
};
