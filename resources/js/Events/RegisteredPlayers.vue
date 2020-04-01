<template>
    <div>
        <h2 class="font-serif uppercase text-2xl mb-2">Registered Players</h2>

        <div v-if="event.players && event.players.length">
            <ul>
                <li v-for="player in event.players" class="odd:bg-gray-100 px-4 py-2">
                    {{ player.user.name }}
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
    import LazyLoader from '../Components/LazyLoader';

    export default {
        props: ['event'],

        computed: {
            ...mapGetters('session', ['user']),
        }
    };
</script>
