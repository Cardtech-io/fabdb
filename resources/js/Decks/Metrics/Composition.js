import {Doughnut, mixins} from 'vue-chartjs';
import _ from "lodash";
import Strings from "../../Utilities/Strings.js";

export default {
    extends: Doughnut,

    props: {
        deck: {
            required: true,
            type: Object
        },

        cards: {
            required: true,
            type: Object
        },
    },

    mixins: [Strings],

    methods: {
        colours(values) {
            let available = {
                "Attack action": "rgb(239 68 68)",
                "Attack reaction": "rgb(249 115 22)",
                "Hero": "rgb(6 182 212)",
                "Non-attack action": "rgb(99 102 241)",
                "Equipment": "rgb(113 113 122)",
                "Item": "rgb(245 158 11)",
                "Defense reaction": "rgb(132 204 22)",
                "Weapon": "rgb(34 197 94)",
                "Instant": "rgb(168 85 247)",
            };

            let colours = {};

            for (let i in values) {
                colours[i] = available[i];
            }

            return colours;
        },

        update(cards) {
            let values = this.values(cards);
            let labels = Object.keys(values);

            let chartData = {
                labels: labels,
                datasets: [{
                    data: Object.values(values),
                    backgroundColor: Object.values(this.colours(values))
                }]
            };

            this.renderChart(chartData, {
                legend: {
                    display: true,
                    position: this.$mq === 'sm' ? 'top' : 'right',
                },
                responsive: true,
                maintainAspectRatio: false
            });
        },

        values(cards) {
            // Groups by card type, then reduces to total number of that type in data set.
            return _(cards.deck().all())
                .groupBy(card => this.prettyType(card.type, card.subTypes))
                .mapValues(cards => cards.reduce((carry, card) => carry + card.total, 0))
                .value();
        }
    },

    mounted() {
        this.update(this.cards);
    }
}
