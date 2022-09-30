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
                labels: Object.keys(data.data),
                datasets: [
                    {
                        label: "Class",
                        data: Object.values(data.data)
                    }
                ]
            };

            this.renderChart(chartData, {
                legend: {
                    display: true,
                    position: this.$mq === 'sm' ? 'top' : 'right',
                },
                responsive: true,
                maintainAspectRatio: false,
                fill: false,
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
