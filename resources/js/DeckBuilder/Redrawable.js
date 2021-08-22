let methods = {
    redraw(id) {
        setTimeout(() => {
            this.$redrawVueMasonry(id);
        }, 10);
    }
};

export default {
    methods: methods
};
