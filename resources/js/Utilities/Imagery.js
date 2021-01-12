export default {
    methods: {
        imageUrl(path, width) {
            return window.location.protocol + '//' + window.settings.imageDomain + path + '?w=' + width + '&fit=clip&auto=compress';
        },

        thumbUrl(path, width, height) {
            return window.location.protocol + '//' + window.settings.imageDomain + path + '?crop=edges&w=' + width + '&h=' + height + '&fit=crop&auto=compress';
        },

        heroBackground(hero) {
            let name = hero.split(' ')[0].replace(',', '').toLowerCase();

            return this.imageUrl('/decks/backgrounds/'+name+'.jpg', 1700);
        },

        heroProfile(hero, width) {
            let imageName = hero.name.split(/[\s,]/)[0].toLowerCase();

            if (hero.keywords[2] == 'young') {
                imageName += '-blitz';
            }

            return this.imageUrl('/heroes/' + imageName + '.jpg', width);
        },

        cardImageFromSku(sku, width) {
            return this.imageUrl('/cards/printings/'+sku+'.png', width);
        }
    }
};
