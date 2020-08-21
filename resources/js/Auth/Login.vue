<template>
    <div>
        <header-title title="Login / Register"></header-title>

        <div class="crumbs font-serif uppercase">
            <div class="container sm:mx-auto p-4">&nbsp;</div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto">
                <div class="bg-white p-8 pb-16">
                    <div v-if="!submitted">
                        <form @submit.prevent="submitEmail()">
                            <div class="flex mb-8">
                                <input type="email" class="input focus:bg-white focus:border-gray-500 w-2/3 p-4 rounded-l-lg" placeholder="Email address" v-model="email" required="required">
                                <input type="submit" class="w-1/3 p-4 button-primary rounded-r-lg" value="Send code">
                            </div>

                            <p>Some features on FaB DB require an account. Registration/login is super easy! Just
                                provide your email and grab the code sent to you in a few moments. If you do not yet
                                have an account, we'll create one for you. If you already have one, we'll simply send you
                                a new authentication code. You do not require a separate password.</p>
                        </form>
                    </div>
                    <div v-else>
                        <form @submit.prevent="submitCode()">
                            <div class="flex mb-8">
                                <input type="text" class="input focus:bg-white focus:border-gray-500 w-2/3 p-4 rounded-l-lg" placeholder="Enter your authentication code" v-model="code" required="required">
                                <input type="submit" class="w-1/3 p-4 rounded-r-lg button-primary text-center" value="Login">
                            </div>

                            <p>Great! Now a one-time code will be emailed to you. When it arrives, copy and paste the code into the form above.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapActions } from 'vuex';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import NProgress from 'nprogress';
    import Tracker from '../Components/Tracker';

    export default {
        components: { HeaderTitle },

        data() {
            return {
                code: '',
                email: '',
                submitted: false
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),
            ...mapActions('session', ['setUser']),

            submitEmail: function() {
                axios.post('/authenticate/', { email: this.email }).then(response => {
                    this.submitted = true;

                    const action = response.data.registered ? 'Registered' : 'Code requested';

                    Tracker.track('Authentication', action);
                }).catch(error => {
                    if (error.response.status === 422) {
                        let errors = error.response.data.errors;
                        for (let i in errors) {
                            for (let x in errors[i]) {
                                this.addMessage({ status: 'error', message: errors[i][x] });
                            }
                        }
                    }
                });
            },

            submitCode: function() {
                axios.post('/validate/', { email: this.email, code: this.code }).then(response => {
                    Tracker.track('Authentication', 'Authenticated');

                    const user = response.data.user;
                    const from = this.$route.query.from || '/decks/build';

                    window.session.user = user;

                    this.setUser({ user: user });
                    this.$router.push(from);
                }).catch(error => {
                    if (error.response.status === 404) {
                        this.addMessage({ status: 'error', message: 'The auth code you have provided is incorrect. Please check to that you have not copied it correctly.' });
                    }
                });
            }
        },
    }
</script>
