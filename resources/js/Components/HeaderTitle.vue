<template>
    <div class="container sm:mx-auto hidden sm:block" v-if="!collapsed">
        <div class="p-4 md:py-8 flex">
            <slot name="title">
                <h1 class="font-serif text-white text-4xl uppercase" v-if="title">{{ title }}</h1>
            </slot>
            <slot name="extra"></slot>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        props: ['title'],

        computed: {
            ...mapState('session', ['collapsed'])
        }
    };
</script>
