export default {
    methods: {
        imageUrl: function (path, width) {
            return window.location.protocol + '//fabdb.imgix.net/' + path + '?w=' + width + '&fit=clip&auto=compress';
        }
    }
};
