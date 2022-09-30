export default {
    methods: {
        imageUrl(path, width) {
            return window.location.protocol + '//' + window.settings.imageDomain + path + '?w=' + width + '&fit=clip&auto=compress';
        },

        thumbUrl(path, width, height) {
            return window.location.protocol + '//' + window.settings.imageDomain + path + '?crop=edges&w=' + width + '&h=' + height + '&fit=crop&auto=compress';
        },

        squareThumbUrl(path, width) {
            return path+'&rect=90,115,400,345&crop=edges&w='+width+'&h='+width+'&fit=crop&auto=compress';
        },

        heroProfile(hero, width) {
            // this might seem  odd, but setting the height to the desired width results in a preferable cut and scaling of the original image for avatars, as they're slightly wider
            // than they are taller due to the rect coordinates passed in to the imgix api.
            return hero.image+'&rect=90,115,400,345&h='+width+'&fm=png';
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
