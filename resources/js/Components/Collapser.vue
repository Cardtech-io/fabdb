<template>
    <button @click="toggleCollapse()" class="ml-auto hidden sm:inline-block hover:opacity-75">
        <icon :size="5">
            <path d="M7 10v8h6v-8h5l-8-8-8 8h5z" v-if="!collapsed"/>
            <path d="M7 10V2h6v8h5l-8 8-8-8h5z" v-else/>
        </icon>
    </button>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import Icon from "./Icon";

    export default {
        components: {Icon},

        computed: {
            ...mapState('session', ['collapsed'])
        },

        methods: {
            ...mapActions('session', ['toggleCollapse'])
        }
    }
</script>
