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
            let chartData = {

                labels: ["Went first", "Went second"],
                datasets: [
                    {
                        type: "line",
                        label: "Either",
                        borderColor: localStorage.getItem('darkMode') === 'true' ? 'white' : 'black',
                        data: data.either,
                        fill: false
                    },
                    {
                        label: "Won",
                        backgroundColor: "rgb(20 184 166)",
                        data: data.won
                    },
                    {
                        label: "Lost",
                        backgroundColor: "rgb(249 115 22)",
                        data: data.lost
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
