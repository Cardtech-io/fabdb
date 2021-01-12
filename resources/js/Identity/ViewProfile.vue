<template>
    <div class="container p-4 py-8 pt-16 sm:mx-auto text-white flex">
        <div class="flex-1 w-1/3">
            <div class="flex navigation pb-8">
                <avatar :user="user" :width="100" class="mr-4"></avatar>
                <div>
                    <h1 class="font-serif text-4xl uppercase mb-2">{{ user.name }}</h1>
                    <div class="text-base">
                        Decks - Want list - Trade list
                    </div>
                </div>
            </div>
        </div>
        <div class="w-2/3">
            <div class="flex">
                <div class="w-1/2">
                    <div class="inline-block bg-semi-black py-2 px-3 text-gray-300 rounded-t-lg">
                        <h2 class="inline font-serif uppercase mr-2">Want list</h2>
                        <span class="text-gray-600">(</span>{{ wants.meta.total }}<span class="text-gray-600">)</span>
                    </div>
                    <div class="bg-semi-black text-gray-400">
                        <div v-for="card in wants.data" class="px-4 py-2">
                            <div class="font-serif uppercase text-lg">{{ card.name }}</div>
                            <span v-for="printing in card.printings" :class="printing.sku.finish" class="inline-block text-sm text-white px-1 mr-1 rounded-sm" :title="printing.sku.finish">{{ printing.sku.sku }}</span>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <div class="inline-block bg-semi-black py-2 px-3 text-gray-300 rounded-t-lg">
                        <h2 class="inline font-serif uppercase mr-2">Trade list</h2>
                        <span class="text-gray-600">(</span>{{ trades.meta.total }}<span class="text-gray-600">)</span>
                    </div>
                    <div class="bg-semi-black text-gray-400">
                        <div v-for="card in trades.data" class="px-4 py-2">
                            <div class="font-serif uppercase text-lg">{{ card.name }} {{ card.rarity }}</div>
                            <span v-for="printing in card.printings" :class="printing.sku.finish" class="inline-block text-sm text-white px-1 mr-1 rounded-sm" :title="printing.sku.finish">{{ printing.sku.sku }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from "../Components/Breadcrumbs";
    import HeaderTitle from "../Components/HeaderTitle";
    import LazyLoader from "../Components/LazyLoader";
    import axios from "axios";
    import Models from "../Utilities/Models";
    import User from "./User";
    import Avatar from "./Avatar";
    import Imagery from "../Utilities/Imagery";

    export default {
        components: {
            Avatar,
            Breadcrumbs,
            HeaderTitle,
        },

        mixins: [Imagery],

        data() {
            return {
                decks: {},
                wants: {},
                trades: {},
                user: null,
                title: '',
                tab: 'decks',
            }
        },

        computed: {
            crumbs() {
                return [
                    {text: 'Home', link: '/'},
                    {text: 'View profile: '+this.user.name}
                ];
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.all([
                axios.get('/users/'+to.params.user),
                axios.get('/decks?user='+to.params.user+'&per_page=10&order=newest'),
                axios.get('/collection/lists?user='+to.params.user+'&view=want'),
                axios.get('/collection/lists?user='+to.params.user+'&view=trade'),
            ])
            .then(axios.spread((...responses) => {
                callback(function() {
                    this.user = Models.hydrate(responses[0].data, User);
                    this.decks = responses[1].data;
                    this.wants = responses[2].data;
                    this.trades = responses[3].data;
                })
            }));
        })
    }
</script>
