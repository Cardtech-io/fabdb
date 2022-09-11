<template>
    <button class="block" @click="toggleView" :disabled="inactive" :class="{ 'text-gray-500': inactive, 'link-alternate': !inactive }">
        <icon :size="6">
            <path d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z" v-if="view === 'text'"/>
            <path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM1 5h12v2H1V5zm0 8h12v2H1v-2z" v-else/>
        </icon>
    </button>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    import Icon from "../../Components/Icon";

    export default {
        components: {Icon},

        computed: {
            ...mapState('deck', ['mode', 'view']),

            inactive: function() {
                return this.mode === 'details';
            }
        },

        methods: {
            ...mapActions('deck', ['toggleView'])
        }
    };
</script>

