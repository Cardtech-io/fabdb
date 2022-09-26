import {Scatter, mixins} from 'vue-chartjs';
import _ from "lodash";
import Strings from "../../Utilities/Strings.js";

export default {
    extends: Scatter,

    props: {
        cards: {
            required: true,
            type: Object
        },
    },

    mixins: [Strings],

    methods: {
        update(cards) {
            let values = this.values(cards);

            let chartData = {
                datasets: [{
                    data: Object.values(values)
                }]
            };

            this.renderChart(chartData, {
                legend: {
                    display: false,
                    labels: {
                        boxWidth: 16,
                        fontColor: localStorage.getItem('darkMode') === 'true' ? 'white' : 'black',
                    },
                    position: this.$mq === 'sm' ? 'top' : 'right',
                },
                responsive: true,
                maintainAspectRatio: false
            });
        },

        values(cards) {
            // Groups by card type, then reduces to total number of that type in data set.
            return _(cards.other().all())
                .groupBy(card => card.stats.resource)
                .mapValues(cards => cards.reduce((carry, card) => carry + card.total, 0))
                .value();
        }
    },

    mounted() {
        this.update(this.cards);
    }
}
