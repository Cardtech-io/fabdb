export default {
    track: function(category, action, label, value) {
        if (typeof ga !== 'undefined') {
            ga('send', 'event', category, action, value);
        }
    }
};
