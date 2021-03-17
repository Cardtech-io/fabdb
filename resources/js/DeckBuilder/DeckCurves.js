import {Bar, mixins} from 'vue-chartjs';
import _ from 'lodash';

export default {
    extends: Bar,
    props: {
        cards: {
            required: true,
            type: Object
        },
        stat: {
            required: true,
            type: String
        }
    },

    methods: {
        update(cards) {
            let values = _(cards.all())
                .groupBy(card => card.stats[this.stat] || 0)
                .mapValues(cards => cards.length)
                .value();

            let label = this.stat === 'resource' ? 'Pitch' : 'Cost';
            let color = this.stat === 'cost' ? '237, 137, 54' : '66, 153, 225';

            let chartData = {
                labels: _.keys(values),

                datasets: [
                    {
                        label: label,
                        backgroundColor: 'rgba(' + color + ', 0.5)',
                        borderColor: 'rgba(' + color + ', 1)',
                        borderWidth: 1,
                        data: _.values(values),
                    }
                ],
            };

            this.renderChart(chartData, {
                legend: {
                    display: true,
                    position: 'bottom',
                },
                responsive: true,
                maintainAspectRatio: false,
                fill: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            stepSize: 10,
                            suggestedMin: 0
                        }
                    }]
                }
            });
        }
    },

    watch: {
        cards(cards) {
            this.update(cards);
        }
    },

    mounted () {
        this.update(this.cards);
    }
};
