export default {
    methods: {
        imageUrl: function (path, width) {
            return window.location.protocol + '//' + window.settings.imageDomain + path + '?w=' + width + '&fit=clip&auto=compress';
        },

        thumbUrl: function(path, width, height) {
            return window.location.protocol + '//' + window.settings.imageDomain + path + '?crop=edges&w=' + width + '&h=' + height + '&fit=crop&auto=compress';
        },

        heroProfile: function(heroName, format, width) {
            let imageName = heroName.split(/[\s,]/)[0].toLowerCase();

            if (format == 'blitz') {
                imageName += '-blitz';
            }

            return this.imageUrl('/heroes/' + imageName + '.jpg', width);
        }
    }
};
