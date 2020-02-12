<template>
    <div class="mt-4 px-4 sm:px-0">
        <form @submit.prevent="save" v-if="user">
            <div class="w-full" v-if="!user.name || nameRequiresSaving">
                <input type="text" v-model="name" class="input-white bg-white focus:border-gray-500 py-3 px-4 rounded-lg" placeholder="Name" required>
            </div>

            <div class="w-full mt-1">
                <textarea type="text" v-model="content" class="input-white bg-white focus:border-gray-500 py-3 px-4 rounded-lg" rows="4" :placeholder="'Type here to comment on this ' + type + '.'"></textarea>
            </div>

            <input type="submit" value="Comment" class="appearance-none block w-full mt-2 bg-orange-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-orange-500 disabled:opacity-50" :disabled="saving">
        </form>
        <div v-else class="text-center">
            You must be <router-link :to="'/login/?from=' + $route.path" class="link">logged in</router-link> to participate in discussions.
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import axios from 'axios';

    export default {
        props: [ 'type', 'foreign' ],

        computed: {
            ...mapGetters('session', ['user']),

            name: {
                get() {
                    return this.user.name;
                },

                set(name) {
                    this.setUserParam({ param: 'name', value: name });
                    this.nameRequiresSaving = true;
                }
            },
        },

        data() {
            return {
                content: null,
                nameRequiresSaving: false,
                saving: false,
            }
        },

        methods: {
            ...mapActions('session', ['setUserParam']),
            ...mapActions('messages', ['addMessage']),

            save: function() {
                this.saving = true;

                if (this.nameRequiresSaving) {
                    axios.put('/profile/name', { name: this.name });
                }

                axios.post('/comments/', {
                    type: this.type,
                    foreign: this.foreign,
                    content: this.content
                }).then(response => {
                    this.addMessage({ status: 'success', message: 'Comment posted.' });
                    this.saving = false;
                    this.content = '';
                    this.$emit('comment-posted', response.data);
                });
            }
        }
    };
</script>