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
            console.log(data);
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
        getData(deck) {
            axios
                .get("/games/hero-win-rate?deck="+deck)
                .then((response) => {
                    this.update(response.data);
                });
        },
    },

    mounted() {
        this.getData(this.slug);
    },
};
