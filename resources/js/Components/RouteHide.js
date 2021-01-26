export default {
    data() {
        return {
            show: true
        }
    },

    methods: {
        check(route) {
            this.show = route.name !== this.routeName();
        },

        routeName() {
            throw 'You must define routeName in implementing components.';
        }
    },

    watch: {
        $route(to) {
            this.check(to);
        }
    },

    mounted() {
        this.check(this.$route);
    }
};
