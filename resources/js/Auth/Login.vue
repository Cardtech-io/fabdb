<template>
    <div>
        <header-title title="Login / Register"/>

        <div class="crumbs font-serif uppercase">
            <div class="container sm:mx-auto px-4 py-2">&nbsp;</div>
        </div>

        <div class="main-body">
            <div class="container sm:mx-auto">
                <div class="bg-white dark:bg-gray-800 p-4 py-16">
                    <check-email v-if="step === 'first'" @status-changed="updateStep" @email-changed="updateEmail"></check-email>
                    <register v-if="step === 'registration-required'" :email="email"@status-changed="updateStep"></register>
                    <validate-code v-if="step === 'code-requested' || step === 'user-registered'" :email="email"></validate-code>
                    <enter-password v-if="step === 'password-required'" :email="email"></enter-password>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import CheckEmail from "./Login/CheckEmail.vue";
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Register from "./Login/Register.vue";
    import ValidateCode from "./Login/ValidateCode.vue";
    import EnterPassword from "./Login/EnterPassword.vue";

    export default {
        components: {CheckEmail, EnterPassword, HeaderTitle, Register, ValidateCode},

        data() {
            return {
                email: '',
                step: 'first'
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),
            ...mapActions('session', ['setUser']),

            updateEmail(email) {
                this.email = email;
            },

            updateStep(stepChange) {
                this.step = stepChange;
            }
        },
    }
</script>
