export default {
    track: function(category, action, label, value) {
        if (typeof ga !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label,
                'value': value
            });
        }
    }
};
