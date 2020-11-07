<template>
    <div class="flex rounded-lg overflow-hidden text-sm xl:text-base mr-2">
        <button type="button" class="flex-grow block px-4 py-3" v-for="(text, view) in modes" @click="select(view)" :class="classes(view)">
            {{ text }}
        </button>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';

    export default {
        data() {
            return {
                isOpen: false
            };
        },

        computed: {
            ...mapState('deck', ['mode']),
            ...mapGetters('deck', ['requiresSideboard']),

            modes() {
                return {
                    all: 'Deck',
                    search: 'Edit',
                    sideboard: 'Sideboard',
                    details: 'Settings'
                };
            }
        },

        methods: {
            ...mapActions('deck', ['setMode']),

            classes(view) {
                return {
                    'button-disabled': this.mode === view,
                    'button-secondary': this.mode !== view,
                    'hidden lg:inline-block': view === 'sideboard'
                };
            },

            select: function(mode) {
                if (mode !== this.mode) {
                    this.setMode({ mode });
                    this.isOpen = false;
                }
            }
        }
    };
</script>
