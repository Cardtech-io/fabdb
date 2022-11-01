<template>
    <selector :width="170" layout="icon">
        <template #title>
            <span class="flex items-center space-x-1 button-primary rounded-lg px-3 text-sm">
                <icon :size="4">
                    <path d="M2 4.5A2.5 2.5 0 014.5 2h11a2.5 2.5 0 010 5h-11A2.5 2.5 0 012 4.5zM2.75 9.083a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75zM2.75 12.663a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75zM2.75 16.25a.75.75 0 000 1.5h14.5a.75.75 0 100-1.5H2.75z" />
                </icon>
                <span class="py-2">
                    V.{{deck.version}}
                </span>
                <icon :size="5">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </icon>
            </span>
        </template>
        <template v-slot:items="slotProps">
            <selector-item :selected="false">
                <button class="flex items-center space-x-1" @click.prevent="newVersion">
                    <span>New version</span>
                    <icon :size="5">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </icon>
                </button>
            </selector-item>
            <selector-item :value="version.version" :selected="deck.version" v-for="version in deck.versions" :key="version.version">
                <span v-if="deck.version === version.version" class="flex items-center space-x-1">
                    <span>V.{{version.version}}</span>
                </span>
                <router-link v-else :to="{name: 'decks.build', params: {deck: version.slug}}" class="flex items-center space-x-1">
                    <span>Switch to V.{{version.version}}</span>
                </router-link>
            </selector-item>
        </template>
    </selector>
</template>

<script>
import {mapGetters} from "vuex";
import Icon from "../Components/Icon.vue";
import Selector from "../Components/Selector.vue";
import SelectorItem from "../Components/SelectorItem.vue";

export default {
    components: {
        Icon,
        Selector,
        SelectorItem
    },

    props: {
        deck: {
            required: true
        }
    },

    computed: {
        ...mapGetters('session', ['user'])
    },

    methods: {
        fabOnlineUrl() {
            let fabDeckUrl = encodeURIComponent('https://fabdb.net/decks/build/'+this.deck.slug);
            let description = encodeURIComponent('Testing '+this.deck.name);
            let visibility = this.deck.visiblity ? this.deck.visibility : 'public';

            return `https://www.fleshandbloodonline.com/FaBOnline2/CreateGame.php?fabdb=${fabDeckUrl}&user=${this.user.slug}&gameDescription=${description}&format=${this.deck.format}&visibility=${visibility}`;
        },

        newVersion() {
            axios.post(`decks/${this.deck.slug}/version`).then(response => this.$router.push({name: 'decks.build', params: {deck: response.data}}))
        }
    }
}
</script>
