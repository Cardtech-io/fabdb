<template>
    <button class="block" @click="setZoom" :disabled="inactive" :class="{ 'text-gray-500': inactive, 'link-alternate': !inactive }">
        <icon :size="6">
            <path v-if="action === 'in'" fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12zM7 7V5h2v2h2v2H9v2H7V9H5V7h2z"/>
            <path v-else fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12zM5 7h6v2H5V7z"/>
        </icon>
    </button>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';

    export default {
        props: ['action'],

        computed: {
            ...mapGetters('deck', ['minZoom', 'maxZoom']),
            ...mapState('deck', ['fullScreen', 'mode', 'view', 'zoom']),

            // Returns true if the button is activeNumber
            inactive() {
                if (this.mode === 'details' || this.view === 'text') return true;

                if (this.action === 'in') {
                    return this.zoom <= this.minZoom;
                }

                return this.zoom >= this.maxZoom;
            }
        },

        methods: {
            ...mapActions('deck', ['zoomIn', 'zoomOut']),

            setZoom: function() {
                let action = this.action === 'in' ? 'zoomIn' : 'zoomOut';

                this[action]();
            },
        }
    };
</script>
