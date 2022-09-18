<template>
    <div>
        <h2 class="font-serif uppercase text-2xl mb-2">Registered Players</h2>
        <div v-if="event.players && event.players.length">
            <ul>
                <li v-for="player in event.players" class="flex odd:bg-gray-100 rounded-xl mb-2 items-center hover:bg-white">
                    <div>
                        <avatar :user="player.user" :width="50" rounded="xl"></avatar>
                    </div>
                    <div class="flex-auto mx-4">
                        {{ player.user.name }}
                    </div>
                    <div v-if="event.type == 'constructed'" class="pr-4">
                        <router-link :to="{ name: 'decks.view', params: { deck: deck(player.user.slug).slug } }" v-if="deck(player.user.slug)" class="link">
                            View deck
                        </router-link>
                        <span v-else>
                            Awaiting submission
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div v-else class="bg-gray-100 px-4 py-2">
            There are currently no registered players.
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import LazyLoader from '../Components/LazyLoader.js';
    import Avatar from '../Identity/Avatar.vue';

    export default {
        props: ['event'],

        components: { Avatar },

        computed: {
            ...mapGetters('session', ['user']),
        },

        methods: {
            deck: function(userSlug) {
                return this.event.decks.filter(deck => {
                    return deck.user.slug == userSlug;
                })[0];
            }
        }
    };
</script>
