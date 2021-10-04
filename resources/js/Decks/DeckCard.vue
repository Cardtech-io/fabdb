<template>
    <router-link :to="/cards/ + card.identifier" class="block flex items-center" v-if="useRouter">
        <colour :resource="card.stats.resource" class="mr-2" v-if="card.stats.resource || !collapse"></colour>
        <span @mouseover="toggleCard(card)" @mouseleave="toggleCard(false)">{{ card.name }}</span>
        <span class="ml-1" v-if="total()">({{ total() }})</span>
        <div class="flex items-center ml-auto" v-if="card.sideboardTotal" :title="card.sideboardTotal + ' in sideboard'">
            <icon :size="4">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
            </icon>
            <span class="ml-1">({{ card.sideboardTotal }})</span>
        </div>
    </router-link>
    <a :href="'/cards/' + card.identifier" target="_blank" class="block flex items-center" v-else>
        <colour :resource="card.stats.resource" class="mr-2" v-if="card.stats.resource || !collapse"></colour>
        <span @mouseover="toggleCard(card)" @mouseleave="toggleCard(false)">{{ card.name }}</span>
        <span class="ml-1" v-if="total()">({{ total() }})</span>
        <div class="flex items-center ml-auto" v-if="card.sideboardTotal" :title="card.sideboardTotal + ' in sideboard'">
            <icon :size="4">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
            </icon>
            <span class="ml-1">({{ card.sideboardTotal }})</span>
        </div>
    </a>
</template>

<script>
    import Colour from "../DeckBuilder/Colour";

    export default {
        props: {
            card: {
                type: Object,
                required: true
            },

            collapse: {
                type: Boolean,
                default: false,
                required: false
            },

            useRouter: {
                type: Boolean,
                default: true
            }
        },

        components: {Colour},

        methods: {
            toggleCard(card) {
                this.$eventHub.$emit('hover-card', card);
            },

            total() {
                return this.card.total - this.card.sideboardTotal;
            }
        }
    }
</script>
