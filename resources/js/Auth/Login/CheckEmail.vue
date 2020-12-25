<template>
    <form @submit.prevent="checkEmail()">
        <div class="flex mb-4">
            <input type="email" class="input focus:bg-white focus:border-gray-500 w-3/4 p-4 rounded-l-lg" placeholder="Email address" v-model="email" required="required">
            <submit text="Next" class="w-1/4 p-4 rounded-l-none rounded-r-lg"></submit>
        </div>

        <p>
            Some features on FaB DB require an account. Registration &amp; login is super easy! Just
            provide your email address and we'll take it from here!
        </p>
    </form>
</template>

<script>
    import {mapActions} from "vuex";
    import axios from "axios";
    import Submit from "../../Components/Form/Submit";

    export default {
        components: {
            Submit
        },

        data() {
            return {
                email: ''
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            checkEmail() {
                axios.post('/check-email/', {email: this.email}).then(response => {
                    this.$emit('email-changed', this.email);
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
