import moment from 'moment';

export default {
    toLocal: function(dateTime) {
        return moment.utc(dateTime).local();
    },

    calendar: function(dateTime) {
        return this.toLocal(dateTime).calendar();
    }
};
