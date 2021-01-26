<template>
    <div class="h-full">
        <div id="app" class="flex flex-col relative h-full">
            <!-- Header -->
            <navigation class="navigation"></navigation>

            <!-- Content -->
            <div class="clearfix flex-grow">
                <router-view :key="$route.fullPath"></router-view>
            </div>

            <!-- Footer -->
            <app-footer></app-footer>
        </div>

        <messages></messages>
        <complete-profile></complete-profile>
        <version-handler></version-handler>
        <hover-card></hover-card>

        <modal name="search-help" :adaptive="true" :dialog="true" height="auto" classes="bg-gray-100 rounded-xl">
            <search-help></search-help>
        </modal>

        <modal name="collection-clarification" :adaptive="true" :click-to-close="false" height="auto" classes="bg-black sm:rounded-xl">
            <collection-clarification></collection-clarification>
        </modal>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import CollectionClarification from "./Collection/CollectionClarification";
    import AppFooter from "./Components/Layout/Footer";
    import CompleteProfile from './Identity/CompleteProfile.vue';
    import HoverCard from "./DeckBuilder/HoverCard";
    import Messages from './Components/Messages.vue';
    import Navigation from './Components/Navigation.vue';
    import SearchHelp from "./CardDatabase/SearchHelp";
    import VersionHandler from './Components/VersionHandler.vue';

    export default {
        components: {
            CollectionClarification,
            CompleteProfile,
            AppFooter,
            HoverCard,
            Messages,
            Navigation,
            SearchHelp,
            VersionHandler
        },

        computed: {
            ...mapGetters('session', ['user'])
        },

        metaInfo: {
            title: 'Flesh and Blood TCG, deck builder, collection manager and more!',
            titleTemplate: '%s',
            meta: [
                { vmid: 'og:url', property: 'og:url', content: window.location.href },
                { vmid: 'description', name: 'description', content: 'fabdb.net is a free card management and deck builder for the fantastic TCG, Flesh & Blood.' },
                { vmid: 'fb:app_id', property: 'fb:app_id', content: 269161470718107 }
            ]
        },

        methods: {
            ...mapActions('session', ['bootState', 'setSession']),
        },

        created() {
            if (window.session) {
                this.setSession({ session: window.session });
            }

            this.bootState();
        },

        watch: {
            user(user, oldValue) {
                if (user && user.hasCollection && !user.clarification) {
                    this.$modal.show('collection-clarification');
                }
            }
        },
    };
</script>
