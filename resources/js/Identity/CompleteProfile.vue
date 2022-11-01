<template>
    <modal name="complete-profile" :adaptive="true" height="auto" classes="bg-gray-100" v-if="user">
        <form @submit.prevent="completeProfile()">
            <h2 class="bg-red-900 text-white font-serif text-2xl uppercase py-3 px-4">Complete your profile</h2>

            <div class="px-4 pb-4">
                <div class="w-full mt-4">
                    <label class="block font-serif uppercase tracking-wide mb-1">Name</label>
                    <input type="text" v-model="name" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                </div>

                <div class="w-full mt-4">
                    <label class="block font-serif uppercase tracking-wide mb-1">GEM player ID</label>
                    <input type="text" v-model="gemId" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                </div>

                <div class="flex mt-8">
                    <input type="button" value="Cancel" class="appearance-none block w-1/2 bg-gray-600 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-gray-500 disabled:opacity-50" @click.prevent="close()">
                    <submit text="Save" class="w-1/2 ml-2"></submit>
                </div>
            </div>
        </form>
    </modal>
</template>

<script>
    import axios from 'axios';
    import { mapActions, mapGetters } from 'vuex';
    import Submit from "../Components/Form/Submit.vue";

    export default {
        components: {Submit},
        computed: {
            ...mapGetters('session', ['user']),

            name: {
                get() {
                    return this.user.name;
                },

                set(name) {
                    this.setUserParam({ param: 'name', value: name });
                }
            },

            gemId: {
                get() {
                    return this.user.gemId;
                },

                set(gemId) {
                    this.setUserParam({ param: 'gemId', value: gemId });
                }
            },
        },

        methods: {
            ...mapActions('session', ['setUserParam']),
            ...mapActions('message', ['addMessage']),

            close: function() {
                this.$modal.hide('complete-profile');
            },

            completeProfile: function() {
                let params = {
                    name: this.name,
                    gemId: this.gemId,
                };

                axios.put('/profile/complete', params).then(response => {
                    this.close();
                    this.addMessage({ status: 'success', message: 'Your profile is now complete.' });
                });
            }
        },

        mounted() {
            axios.interceptors.response.use(
                response => { return response; },
                error => {
                    if (error.response && error.response.status === 422 && error.response.headers['x-requires']) {
                        this.$modal.show('complete-profile');
                    }

                    return Promise.reject(error);
             });
        }
    };
</script>
