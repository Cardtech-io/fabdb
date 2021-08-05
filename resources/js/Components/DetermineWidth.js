export default {
    data() {
        return {
            requiredWidth: 0,
            requiredHeight: 0,
        }
    },

    computed: {
        styles() {
            return {
                width: this.requiredWidth+'px',
                height: this.requiredHeight+'px',
            }
        },
    },

    // This is for determining the size that the image needs to be to help address CLS issues :)
    mounted() {
        this.requiredWidth = this.$refs.image.getBoundingClientRect().width;
        let ratio = this.requiredWidth / 546;
        this.requiredHeight = 762 * ratio;
    }
};
