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
    import SuccessfulAuth from "./SuccessfulAuth.vue";
    import Tracker from "../../Components/Tracker";

    export default {
        props: {
            email: {
                required: true,
                type: String
            }
        },

        mixins: [
            SuccessfulAuth
        ],

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
                axios.post('/auth/validate/', { email: this.email, code: this.code }).then(response => {
                    Tracker.track('Authentication', 'Authenticated code');
                    this.success(response.data.user);
                }).catch(error => {
                    if (error.response.status === 404) {
                        this.addMessage({ status: 'error', message: 'The auth code you have provided is incorrect. Please check to that you have not copied it correctly.' });
                    }
                });
            }
        }
    }
</script>
