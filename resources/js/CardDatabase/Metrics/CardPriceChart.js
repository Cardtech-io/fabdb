import { Line } from 'vue-chartjs';
import { mapGetters } from 'vuex';
import axios from "axios";
import _ from 'lodash';

export default {
    extends: Line,
    props: ['card', 'options'],

    computed: {
        ...mapGetters('session', ['user'])
    },

    mounted () {
        let currency = this.user && this.user.currency || 'USD';

        axios.get('/market/' + this.card.identifier + '?days=30&currency=' + currency).then(response => {
            response = response.data;

            let chartData = {
                labels: _.keys(response),

                datasets: [
                    {
                        label: 'Low',
                        backgroundColor: 'rgba(66, 153, 225, 0.5)',
                        borderColor: 'rgba(66, 153, 225, 1)',
                        borderWidth: 1,
                        data: _.values(response).map(record => record[0]),
                    },
                    {
                        label: 'Mean',
                        backgroundColor: 'rgba(66, 153, 225, 0.5)',
                        borderColor: 'rgba(66, 153, 225, 1)',
                        borderWidth: 1,
                        data: _.values(response).map(record => record[1]),
                    },
                    {
                        label: 'High',
                        backgroundColor: 'rgba(66, 153, 225, 0.5)',
                        borderColor: 'rgba(66, 153, 225, 1)',
                        borderWidth: 1,
                        data: _.values(response).map(record => record[2]),
                    },
                ]
            };

            this.renderChart(chartData, {
                legend: false,
                responsive: true,
                maintainAspectRatio: false,
                fill: false
            });
        });
    }
};
