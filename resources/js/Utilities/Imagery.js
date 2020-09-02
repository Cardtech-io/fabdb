export default {
    methods: {
        imageUrl: function (path, width) {
            return window.location.protocol + '//' + window.settings.imageDomain + path + '?w=' + width + '&fit=clip&auto=compress';
        },

        thumbUrl: function(path, width, height) {
            return window.location.protocol + '//' + window.settings.imageDomain + path + '?crop=edges&w=' + width + '&h=' + height + '&fit=crop&auto=compress';
        },

        heroProfile: function(hero, width) {
            let imageName = hero.name.split(/[\s,]/)[0].toLowerCase();

            if (hero.keywords[2] == 'young') {
                imageName += '-blitz';
            }

            return this.imageUrl('/heroes/' + imageName + '.jpg', width);
        }
    }
};
