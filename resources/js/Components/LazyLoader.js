export default (loadData) => {
    let loaderCallback = () => {};

    const loadRoute = (to, from, next) => {
        loadData(to, (callback) => {
            loaderCallback = callback;
            next();
        })
    };

    return {
        beforeRouteEnter: loadRoute,
        beforeRouteUpdate: loadRoute,
        created: function() {
            loaderCallback.apply(this)
        },
        watch: {
            '$route': function() {
                loaderCallback.apply(this)
            }
        }
    }
};
