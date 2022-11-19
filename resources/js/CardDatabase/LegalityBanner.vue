<template>
    <div class="rounded-lg overflow-hidden text-sm text-center text-white">
        <div v-for="format in Object.keys(formats)" v-if="card.legality && card.legality[format]" class="py-1 px-4" :class="colours[card.legality[format]]">
            This card is {{text(card.legality[format])}} in {{format}}.
        </div>
    </div>
</template>

<script>
import Legality from "./Legality/Legality.vue";

export default {
    props: {
        card: {
            required: true,
            type: Object
        }
    },

    extends: Legality,

    computed: {
        formats() {
            return this.$settings.game.decks.formats;
        }
    },

    methods: {
        text(status) {
            if (status === 'legend') {
                return 'now a Living Legend'
            }

            return status
        }
    }
}
</script>
