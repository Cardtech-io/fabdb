<template>
    <div>
        <div class="w-full h-full fixed top-0 left-0 z-10 bg-gray-400 opacity-50" v-if="visible"></div>
        <div class="fixed w-full z-20" v-if="visible">
            <div class="relative p-8 mt-40 bg-black md:rounded-lg md:w-1/2 md:mx-auto">
                <div class="absolute top-0 right-0">
                    <a href="" @click.prevent="close()"><svg class="fill-current h-8 w-8 mt-2 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.93 19.07A10 10 0 1119.07 4.93 10 10 0 014.93 19.07zm1.41-1.41A8 8 0 1017.66 6.34 8 8 0 006.34 17.66zM13.41 12l1.42 1.41a1 1 0 11-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 11-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 111.42-1.42L12 10.6l1.41-1.42a1 1 0 111.42 1.42L13.4 12z"/></svg></a>
                </div>
                <h1 class="font-serif text-xl text-gray-300">Login</h1>

                <div v-if="!submitted">
                    <form @submit.prevent="submitEmail()">
                        <p class="my-4">Some features on fabdb require an account. Registration/login is super, super easy! Just provide your email and grab the code sent to you in a few moments :)</p>

                        <div class="flex mt-8">
                            <input type="email" class="w-2/3 p-4 rounded-l-lg" placeholder="Email address" v-model="email">
                            <input type="submit" class="w-1/3 p-4 rounded-r-lg text-gray-300 bg-gray-800 hover:bg-gray-700" value="Send code"">
                        </div>
                    </form>
                </div>
                <div v-else>
                    <form @submit.prevent="submitCode()">
                        <p class="my-4">Great! Now a one-time code will be emailed to you. When it arrives, copy and paste the code into the form below.</p>

                        <div class="flex mt-8">
                            <input type="text" class="w-2/3 p-4 rounded-l-lg" placeholder="" v-model="code">
                            <input type="submit" class="w-1/3 p-4 rounded-r-lg text-gray-300 bg-gray-800 hover:bg-gray-700 text-center" value="Login">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import NProgress from 'nprogress';
    import tracker from '../Components/Tracker';

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
            close: function() {
                this.visible = false;
            },

            submitEmail: function() {
                axios.post('/authenticate/', {email: this.email}).then(response => {
                    this.submitted = true;

                    const action = response.data.registered ? 'Registered' : 'Code requested';

                    tracker.track('Authentication', action);
                });
            },
            submitCode: function() {
                axios.post('/validate/', {email: this.email, code: this.code}).then(response => {
                    this.visible = false;
                    
                    tracker.track('Authentication', 'Authenticated');
                });
            }
        },

        mounted() {
            axios.interceptors.response.use(null, error => {
                if (error && error.response.status === 401) {
                    this.visible = true;
                    NProgress.done();
                }
                else {
                    return Promise.reject(error);
                }
            });
        }
    }
</script>