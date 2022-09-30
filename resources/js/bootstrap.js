import _ from 'lodash';
import axios from 'axios';
import moment from 'moment';
import {Chart} from 'chart.js';

window._ = _;
window.axios = axios;
window.moment = moment;

window.axios.defaults.baseURL = '/api';
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

Chart.defaults.global.legend.labels.boxWidth = 16;
Chart.defaults.global.legend.labels.fontColor = localStorage.getItem('darkMode') === 'true' ? 'white' : 'black';

// Global bar configuration
Chart.defaults.global.elements.rectangle.borderWidth = 2;
Chart.defaults.global.elements.rectangle.borderColor = 'rgba(255, 255, 255, 1)';
Chart.defaults.global.elements.rectangle.borderRadius = 5;

Chart.defaults.scale.gridLines.color = 'rgb(148 163 184)';

// Chart axes configuration
Chart.defaults.bar.scales.xAxes[0].gridLines = {
    display: false
};

Chart.defaults.bar.scales.xAxes[0].ticks = {
    fontColor: localStorage.getItem('darkMode') === 'true' ? 'white' : 'black'
};

Chart.defaults.bar.scales.yAxes[0].ticks = {
    fontColor: localStorage.getItem('darkMode') === 'true' ? 'white' : 'black',
};

// window.axios.defaults.validateStatus = function(status) {
//     return status >= 200 && status < 500; // default
// };

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.VITE_PUSHER_APP_KEY,
//     cluster: process.env.VITE_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

