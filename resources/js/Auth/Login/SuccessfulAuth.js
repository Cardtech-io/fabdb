export default {
    methods: {
        success(user) {
            const from = this.$route.query.from || '/decks/build';

            window.session.user = user;

            this.setUser({ user: user });

            window.location = from;
        }
    }
};
