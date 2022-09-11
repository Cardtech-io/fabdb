<template>
    <selector :width="150" layout="icon">
        <template #title>
            <icon :size="6">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </icon>
        </template>
        <template v-slot:items="slotProps">
            <selector-item value="test" :selected="slotProps.selected">
                <a :href="fabOnlineUrl()" target="_blank">Play on Talishar</a>
            </selector-item>
            <selector-item value="test" :selected="slotProps.selected">
                <router-link :to="{name: 'decks.test', params: {deck: deck.slug}}" class="lg:hidden">
                    Deck tester
                </router-link>
                <router-link :to="{name: 'decks.test.prepare', params: {deck: deck.slug}}" class="hidden lg:inline hover:text-gray-400 dark:hover:text-white">
                    Deck tester
                </router-link>
            </selector-item>
        </template>
    </selector>
</template>

<script>
    import {mapGetters} from "vuex";
    import Icon from "../Components/Icon";
    import Selector from "../Components/Selector";
    import SelectorItem from "../Components/SelectorItem";

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
            }
        }
    }
</script>
