<template>
    <form @submit.prevent="register()">
        <div class="mb-4">
            <input type="email" class="input focus:bg-white focus:border-gray-500 w-full rounded-lg p-4 mb-2" :value="email" required="required" readonly>
            <input type="email" class="input focus:bg-white focus:border-gray-500 w-full rounded-lg p-4 mb-2" placeholder="Confirm email" v-model="emailConfirmation" required="required">
            <submit text="Next" class="w-full p-4"></submit>
        </div>

        <p>
            We couldn't find that email address. To register, please confirm your email. We'll send you a login code to confirm your email.
            Once completed, if you wish, you can configure your account to use a password instead.
        </p>
    </form>
</template>

<script>
    import axios from "axios";
    import {mapActions} from "vuex";
    import Submit from "../../Components/Form/Submit";

    export default {
        props: {
            email: {
                required: true,
                type: String
            },
        },

        components: {
            Submit
        },

        data() {
            return {
                emailConfirmation: ''
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            register() {
                axios.post('/auth/register', {email: this.email, email_confirmation: this.emailConfirmation}).then(response => {
                    this.$emit('status-changed', response.data.status);
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
        }
    }
</script>
