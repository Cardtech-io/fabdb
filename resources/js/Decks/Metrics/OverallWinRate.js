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
            let wonFirst = data.wonFirst;
            let lostFirst = data.lostFirst;
            let wonSecond = data.wonSecond;
            let lostSecond = data.lostSecond;
            let allGames = data.allGames;

            let won = [Math.round(wonFirst*100/allGames).toFixed(2), Math.round(wonSecond*100/allGames).toFixed(2)];
            let lost = [Math.round(lostFirst*100/allGames).toFixed(2), Math.round(lostSecond*100/allGames).toFixed(2)];
            let either = [Math.round(wonFirst*100/(wonFirst + lostFirst)).toFixed(2), Math.round(wonSecond*100/(wonSecond + lostSecond)).toFixed(2)];

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
                tooltips: {
                    callbacks: {
                        // title: function(context) {
                        //     var label = context[0].xLabel;
                        //     return label.slice(4)
                        // },
                        label: function (context, data) {
                            console.log(context)
                            var dataset = data.datasets[0];
                            console.log(dataset);
                            // console.log(context)
                            return " "+context.yLabel + "%";
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                fill: false,
            });
        },
        getData(deck) {
            axios
                .get("/games/overall-win-rate?deck=" + deck)
                .then((response) => {
                    this.update(response.data);
                });
        },
    },

    mounted() {
        this.getData(this.slug);
    },
};
