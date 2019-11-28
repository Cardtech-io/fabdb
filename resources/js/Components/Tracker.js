export default {
    track: function(category, action, label, value) {
        if (typeof ga !== 'undefined') {
            ga('send', 'event', {
                eventCategory: category,
                eventAction: action,
                eventLabel: label,
                eventValue: value
            });
        }
    }
};
