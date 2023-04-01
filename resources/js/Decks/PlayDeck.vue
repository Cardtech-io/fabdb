<template>
    <selector :width="170" layout="icon">
        <template #title>
            <div class="flex space-x-1 link">
                <icon :size="6">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </icon>
                <span class="hidden sm:inline">Play</span>
            </div>
        </template>
        <template v-slot:items="slotProps">
            <selector-item value="test" :selected="slotProps.selected">
                <a :href="fabOnlineUrl()" target="_blank" class="flex items-center space-x-1">
                    <icon :size="4">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </icon>
                    <span>Play on Talishar</span>
                </a>
            </selector-item>
            <selector-item value="test" :selected="slotProps.selected">
                <a :href="feltTableUrl()" target="_blank" class="flex items-center space-x-1">
                    <icon :size="4">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </icon>
                    <span>Play on Felt Table</span>
                </a>
            </selector-item>
            <selector-item value="test" :selected="slotProps.selected">
                <router-link :to="{name: 'decks.test', params: {deck: deck.slug}}" class="flex items-center space-x-1 lg:hidden">
                    <icon :size="4">
                        <path d="M12.75 4a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-.5zM17.75 4a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-.5zM3.288 4.819A1.5 1.5 0 001 6.095v7.81a1.5 1.5 0 002.288 1.277l6.323-3.906a1.5 1.5 0 000-2.552L3.288 4.819z" />
                    </icon>
                    <span>Deck tester</span>
                </router-link>
                <router-link :to="{name: 'decks.test.prepare', params: {deck: deck.slug}}" class="items-center space-x-1 hidden lg:flex hover:text-gray-400 dark:hover:text-white">
                    <icon :size="4">
                        <path d="M12.75 4a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-.5zM17.75 4a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-.5zM3.288 4.819A1.5 1.5 0 001 6.095v7.81a1.5 1.5 0 002.288 1.277l6.323-3.906a1.5 1.5 0 000-2.552L3.288 4.819z" />
                    </icon>
                    <span>Deck tester</span>
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

                return `https://talishar.net/game/create?fabdb=${fabDeckUrl}&user=${this.user.slug}&gameDescription=${description}&format=${this.deck.format}&visibility=${visibility}`;
            },

            feltTableUrl() {
                return `https://felttable.com/fab/import?svc=fabdb&id=${this.deck.slug}`;
            }
        }
    }
</script>
