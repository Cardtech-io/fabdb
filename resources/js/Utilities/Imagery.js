export default {
    methods: {
        imageUrl(path, width) {
            return window.location.protocol + '//' + window.settings.imageDomain + path + '?w=' + width + '&fit=clip&auto=compress';
        },

        thumbUrl(path, width, height) {
            return window.location.protocol + '//' + window.settings.imageDomain + path + '?crop=edges&w=' + width + '&h=' + height + '&fit=crop&auto=compress';
        },

        squareThumbUrl(path, width) {
            return window.location.protocol + '//' + window.settings.imageDomain + path + '?rect=90,95,360,365&crop=edges&w=' + width + '&w='+width+'&h=' + width + '&fit=crop&auto=compress';
        },

        heroBackground(hero) {
            let name = hero.split(' ')[0].replace(',', '').toLowerCase();

            return this.imageUrl('/decks/backgrounds/'+name+'.jpg', 1700);
        },

        heroProfile(hero, width, rounded) {
            let imageName = hero.name.split(/[,]/)[0].toLowerCase().replace(/\s+/g, '-');

            if (hero.keywords.indexOf('young') !== -1) {
                imageName += '-blitz';
            }

            let path = '/heroes/' + imageName + '.png';

            if (rounded) {
                path += '?mask=corners&w='+width+'&h='+width+'&corner-radius=100&fm=png';
            }

            return this.imageUrl(path, width);
        },

        cardImageFromSku(sku, width) {
            return this.imageUrl(this.cardImagePathFromSku(sku), width);
        },

        cardImagePathFromSku(sku) {
            return '/cards/printings/'+sku+'.png';
        }
    }
};
