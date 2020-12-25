<template>
    <form @submit.prevent="submitCode()">
        <div class="flex mb-8">
            <input type="text" class="input focus:bg-white focus:border-gray-500 w-2/3 p-4 rounded-l-lg" placeholder="Enter your authentication code" v-model="code" required="required">
            <submit text="Next" class="w-2/3 p-4 rounded-l-none rounded-r-lg"></submit>
        </div>

        <p>Great! Now a one-time code will be emailed to you. When it arrives, copy and paste the code into the form above.</p>
    </form>
</template>

<script>
    import axios from "axios";
    import {mapActions} from "vuex";
    import Submit from "../../Components/Form/Submit";
    import Tracker from "../../Components/Tracker";

    export default {
        props: {
            email: {
                required: true,
                type: String
            }
        },

        components: {
            Submit
        },

        data() {
            return {
                code: '',
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),
            ...mapActions('session', ['setUser']),

            submitCode: function() {
                axios.post('/validate/', { email: this.email, code: this.code }).then(response => {
                    Tracker.track('Authentication', 'Authenticated');

                    const user = response.data.user;
                    const from = this.$route.query.from || '/decks/build';

                    window.session.user = user;

                    this.setUser({ user: user });

                    window.location = from;
                }).catch(error => {
                    if (error.response.status === 404) {
                        this.addMessage({ status: 'error', message: 'The auth code you have provided is incorrect. Please check to that you have not copied it correctly.' });
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
