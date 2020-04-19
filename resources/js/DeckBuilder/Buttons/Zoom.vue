<template>
    <a href="" class="block link mr-4" @click.prevent="setZoom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-6">
            <path v-if="action == 'in'" fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12zM7 7V5h2v2h2v2H9v2H7V9H5V7h2z"/>
            <path v-else fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12zM5 7h6v2H5V7z"/>
        </svg>
    </a>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        props: ['action'],

        computed: {
            ...mapState('deck', ['fullScreen', 'zoom'])
        },

        methods: {
            ...mapActions('deck', ['zoomIn', 'zoomOut']),

            setZoom: function() {
                let action = this.action == 'in' ? 'zoomIn' : 'zoomOut';

                let floor = this.fullScreen ? 1 : 0;
                let ceiling = this.fullScreen ? 3 : 2;

                if ((this.zoom == floor && action == 'zoomIn') || (this.zoom == ceiling && action == 'zoomOut')) return;

                this[action]();
            },
        }
    };
</script>
