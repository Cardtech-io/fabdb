import {Pie, mixins} from 'vue-chartjs';
import _ from "lodash";
import Strings from "../../Utilities/Strings.js";

export default {
    extends: Pie,

    props: {
        cards: {
            required: true,
            type: Object
        },
    },

    mixins: [Strings],

    methods: {
        colours(values) {
            // Construct a colour set for cost from blue -> red (red for most costly)
            let colours = [];

            for (let i = 0; i < values.length; i++) {
                let blue = 255 - (180 * (i / values.length));
                let red = (i / values.length) * 255;

                colours.push([red+', 0, '+blue]);
            }

            return colours.map(colour => 'rgb('+colour+')');
        },

        update(cards) {
            let values = this.values(cards);
            let labels = Object.keys(values).map(value => value + ' Defense');

            let chartData = {
                labels: labels,
                datasets: [{
                    data: Object.values(values),
                    backgroundColor: Object.values(this.colours(Object.values(values)))
                }]
            };

            this.renderChart(chartData, {
                legend: {
                    display: true,
                    position: this.$mq === 'sm' ? 'top' : 'right',
                },
                responsive: true,
                maintainAspectRatio: false,
            });
        },

        values(cards) {
            // Groups by card type, then reduces to total number of that type in data set.
            return _(cards.all())
                .groupBy(card => card.stats.defense)
                .mapValues(cards => cards.reduce((carry, card) => carry + card.total, 0))
                .value();
        }
    },

    mounted() {
        this.update(this.cards);
    }
}
