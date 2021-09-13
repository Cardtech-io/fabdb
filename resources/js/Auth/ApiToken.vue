<template>
    <div class="bg-gray-200 -mx-4 p-4">
        <div class="bg-white rounded-lg overflow-hidden border border-gray-200">
            <h3 class="font-serif uppercase bg-secondary text-white px-4 py-2">Your API key - Token and Secret</h3>
            <div class="p-4">
                <div v-if="user.apiToken">
                    <div>Your API token: <span class="font-bold">{{user.apiToken}}</span></div>
                    <div v-if="user.apiSecret">
                        Your API secret: <span class="font-bold">{{user.apiSecret}}</span><br>
                        <div class="my-2">Please be sure to copy your secret and store it in a safe place - you will not be able to see it again once this page refreshes.</div>
                    </div>
                    <button class="button-primary rounded px-3 py-2 mt-2" @click="generateApiKey">Regenerate token and secret</button>
                </div>
                <div v-else>
                    <button class="button-primary rounded px-3 py-2" @click="generateApiKey">Generate a token and secret</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters('session', ['user']),
        },

        methods: {
            ...mapActions('session', ['setApiKey']),

            generateApiKey() {
                axios.post('/auth/api-key').then(response => {
                    this.setApiKey({
                        token: response.data.token,
                        secret: response.data.secret
                    });
                });
            }
        }
    };
</script>
