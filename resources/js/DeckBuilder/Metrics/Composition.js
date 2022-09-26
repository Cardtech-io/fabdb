import {Doughnut, mixins} from 'vue-chartjs';
import _ from "lodash";
import Strings from "../../Utilities/Strings.js";

export default {
    extends: Doughnut,

    props: {
        cards: {
            required: true,
            type: Object
        },
    },

    mixins: [Strings],

    methods: {
        colours(values) {

        },

        update(cards) {
            let values = this.values(cards);

            let chartData = values;

            this.renderChart(chartData, {
                responsive: true,
                maintainAspectRatio: false,
                fill: false,
            });
        },

        values(cards) {
            // Groups by card type, then reduces to total number of that type in data set.
            return _(cards.all())
                .groupBy(card => this.prettyType(card.type, card.subType))
                .mapValues(cards => cards.reduce((carry, card) => carry + card.total, 0))
                .value();
        }
    },

    watch: {
        cards(cards) {
            this.update(cards);
        }
    },

    mounted() {
        console.log(this.cards);
        this.update(this.cards);
    }
}
