<template>
    <form @submit.prevent="login()">
        <div class="mb-4">
            <input type="email" class="input focus:bg-white focus:border-gray-500 w-full rounded-lg p-4 mb-2" :value="email" readonly>
            <input type="password" class="input focus:bg-white focus:border-gray-500 w-full rounded-lg p-4 mb-2" placeholder="Enter password" v-model="password" required="required">
            <submit text="Next" class="w-full p-4"></submit>
        </div>

        <p>
            Great! Looks like you have an account! Please enter your password to complete login.
        </p>
    </form>
</template>

<script>
    import axios from "axios";
    import {mapActions} from "vuex";
    import Submit from "../../Components/Form/Submit";
    import Tracker from "../../Components/Tracker";
    import SuccessfulAuth from "./SuccessfulAuth.vue";

    export default {
        props: {
            email: {
                required: true,
                type: String
            },
        },

        mixins: [
            SuccessfulAuth
        ],

        components: {
            Submit
        },

        data() {
            return {
                password: ''
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),
            ...mapActions('session', ['setUser']),

            login() {
                axios.post('/auth/password', { email: this.email, password: this.password }).then(response => {
                    Tracker.track('Authentication', 'Authenticated password');
                    this.success(response.data.user);
                }).catch(error => {
                    if (error.response.status === 422) {
                        this.addMessage({ status: 'error', message: error.response.data.error });
                    }
                });
            },
        }
    }
</script>
