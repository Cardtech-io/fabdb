import {Bar} from 'vue-chartjs';
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
        },
        strategy: {
            required: true,
            type: String,
            validator(value) {
                return ['total', 'length'].indexOf(value) !== -1;
            }
        }
    },

    methods: {
        colours(values) {
            if (this.stat === 'resource') {
                let colours = [];

                if (values.indexOf('1') !== -1) {
                    colours.push('239,68,68'); // red
                }

                if (values.indexOf('2') !== -1) {
                    colours.push('251,191,37'); //yellow
                }

                if (values.indexOf('3') !== -1) {
                    colours.push('96,165,250'); // blue
                }

                return colours;
            }

            // Construct a colour set for cost from blue -> red (red for most costly)
            let colours = [];

            for (let i = 0; i < values.length; i++) {
                let green = 180 - (180 * (i / values.length));
                let red = (i / values.length) * 255;

                colours.push([red+', '+green+', 30']);
            }

            return colours;
        },

        update(cards) {
            let values = this.values(cards);
            let label = this.stat === 'resource' ? 'Pitch' : 'Cost';
            let colours = this.colours(_.keys(values));

            let chartData = {
                labels: _.keys(values).map(label => this.stat === 'resource' ? 'Pitch '+label : 'Cost '+label),

                datasets: [
                    {
                        label: label,
                        backgroundColor: colours.map(colour => 'rgba(' + colour + ', 1)'),
                        data: _.values(values),
                        barPercentage: 0.6,
                    }
                ],
            };

            this.renderChart(chartData, {
                legend: {
                    display: false,
                    position: 'bottom',
                },
                responsive: true,
                maintainAspectRatio: false,
                fill: false,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                }
            });
        },

        values(cards) {
            return _(cards.all())
                .groupBy(card => card.stats[this.stat] || 0)
                .mapValues(cards => {
                    if (this.strategy === 'total') {
                        return cards.reduce((carry, card) => carry + card.total, 0)
                    } else {
                        return cards.length;
                    }
                })
                .value();
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

