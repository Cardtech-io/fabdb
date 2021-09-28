export default {
    methods: {
        imageUrl(path, width) {
            return window.location.protocol + '//' + window.settings.imageDomain + path + '?w=' + width + '&fit=clip&auto=compress';
        },

        thumbUrl(path, width, height) {
            return window.location.protocol + '//' + window.settings.imageDomain + path + '?crop=edges&w=' + width + '&h=' + height + '&fit=crop&auto=compress';
        },

        squareThumbUrl(path, width) {
            return path+'&rect=90,95,360,365&crop=edges&w='+width+'&h='+width+'&fit=crop&auto=compress';
        },

        heroProfile(hero, width, rounded) {
            let url = hero.image+'&rect=90,95,360,365';

            if (rounded) {
                url += '&mask=corners&h='+width+'&corner-radius=100&fm=png';
            }

            return url;
        },

        cardImageFromSku(sku, width) {
            // first we remove any language value from the sku (ie. UES)
            sku = sku.replace(/^((u)[a-z]+(\-))(.+)?/i, '$2$3$4');

            return this.imageUrl(this.cardImagePathFromSku(sku), width);
        },

        cardImagePathFromSku(sku) {
            return '/cards/printings/'+sku+'.png';
        }
    }
};
