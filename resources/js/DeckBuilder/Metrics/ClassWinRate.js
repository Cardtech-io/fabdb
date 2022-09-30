import { Bar, mixins } from "vue-chartjs";
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
            let chartData = {
                labels: Object.keys(data.data).map(this.ucfirst),
                datasets: [
                    {
                        data: Object.values(data.data),
                        backgroundColor: 'rgb(6 182 212)'
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
        getData(deck) {
            axios
                .get("/games/class-win-rate?deck="+deck)
                .then((response) => {
                    this.update(response.data);
                });
        },
    },

    mounted() {
        this.getData(this.slug);
    },
};
