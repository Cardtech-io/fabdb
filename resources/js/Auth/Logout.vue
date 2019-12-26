<template>
    <div></div>
</template>

<script>
    import axios from 'axios';
    import { mapActions } from 'vuex';

    export default {
        mounted() {
            axios.delete('/authenticate').then(() => {
                window.session.user = null;
                this.setUser({ user: null });
                this.$router.push('/');
            });
        },

        methods: {
            ...mapActions('session', ['setUser']),
        },
    }
</script>
