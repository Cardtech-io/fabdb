let methods = {
    redraw: function(id) {
        setTimeout(() => {
            this.$redrawVueMasonry();
        }, 10);
    }
};

export default {
    methods: methods
};
