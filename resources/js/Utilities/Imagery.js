export default {
    methods: {
        imageUrl: function (path, width) {
            return window.location.protocol + '//fabdb.imgix.net' + path + '?w=' + width + '&fit=clip&auto=compress';
        },

        thumbUrl: function(path, width, height) {
            return window.location.protocol + '//fabdb.imgix.net' + path + '?crop=edges&w=' + width + '&h=' + height + '&fit=crop&auto=compress';
        }
    }
};
