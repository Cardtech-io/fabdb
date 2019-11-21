<template>
    <div>
        <div class="w-full h-full fixed top-0 left-0 z-10 bg-gray-400 opacity-50" v-if="visible"></div>
        <div class="fixed w-full z-20" v-if="visible">
            <div class="p-8 mt-40 bg-black md:rounded-lg md:w-1/2 md:mx-auto">
                <h1 class="font-serif text-xl text-gray-300">Login</h1>

                <div v-if="!submitted">
                    <p class="my-4">Some features on fabdb require an account. Registration/login is super, super easy! Just provide your email and grab the code sent to you in a few moments :)</p>

                    <div class="flex mt-8">
                        <input type="email" class="w-2/3 p-4 rounded-l-lg" placeholder="Email address" v-model="email">
                        <input type="button" class="w-1/3 p-4 rounded-r-lg text-gray-300 bg-gray-800 hover:bg-gray-700" value="Send code" @click="submitEmail()">
                    </div>
                </div>
                <div v-else>
                    <p class="my-4">Great! Now a one-time code will be emailed to you. When it arrives, copy and paste the code into the form below.</p>

                    <div class="flex mt-8">
                        <input type="text" class="w-2/3 p-4 rounded-l-lg" placeholder="" v-model="code">
                        <input type="button" class="w-1/3 p-4 rounded-r-lg text-gray-300 bg-gray-800 hover:bg-gray-700 text-center" value="Login" @click="submitCode()">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                code: '',
                email: '',
                submitted: false,
                visible: false
            }
        },

        methods: {
            submitEmail: function() {
                axios.post('/authenticate/', {email: this.email}).then(response => {
                    this.submitted = true;
                });
            },
            submitCode: function() {
                axios.post('/validate/', {email: this.email, code: this.code}).then(response => {
                    this.visible = false;
                    location.reload();
                });
            }
        },

        mounted() {
            axios.interceptors.response.use(null, error => {
                if (error && error.response.status === 401) {
                    this.visible = true;
                }
                else {
                    return Promise.reject(error);
                }
            });
        }
    }
</script>