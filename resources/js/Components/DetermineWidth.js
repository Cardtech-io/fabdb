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

    methods: {
        calculateHeight(width) {
            let ratio = width / 546;
            let height = 762;

            return height * ratio;
        },

        mount(ref) {
            this.requiredWidth = ref.getBoundingClientRect().width;
            this.requiredHeight = this.calculateHeight(this.requiredWidth)
        }
    }
};
