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
                    <div v-if="player.user.subscription" class="pr-4">
                        <badge :subscriptionLevel="player.user.subscription" size="small"></badge>
                    </div>
                </li>
            </ul>
        </div>
        <div v-else class="py-2">
            There are currently no registered players.
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import LazyLoader from '../Components/LazyLoader.js';
    import Avatar from '../Identity/Avatar.vue';
    import Badge from '../Identity/Badge.vue';

    export default {
        props: ['event'],
        components: { Avatar, Badge },

        computed: {
            ...mapGetters('session', ['user']),
        }
    };
</script>
