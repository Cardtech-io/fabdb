<template>
    <div>
        <div class="container sm:mx-auto flex">
            <div class="p-8 py-10 md:px-0">
                <h1 class="font-serif text-white text-4xl uppercase">Browse cards</h1>
            </div>
        </div>

        <div class="sm:mx-auto bg-orange-900 text-white font-serif uppercase">
            <div class="container sm:mx-auto">
                <ul class="flex">
                    <li class="float-left active border-b-4 border-white p-4">Welcome to Rathe</li>
                </ul>
            </div>
        </div>

        <div class="bg-white py-4 border-b-4 border-gray-300">
            <div class="container sm:mx-auto">
                <card-search view="all" @search-completed="refreshResults" :page="page" :refreshable="true"></card-search>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto">
                <div v-if="results && results.data">
                    <div class="clearfix">
                        <div class="clearfix py-4">
                            <div class="float-left w-1/5">
                                <a href="" @click.prevent="setView('gallery')" class="text-gray-800" :class="{ 'text-orange-700 hover:text-gray-500': view != 'gallery' }">
                                    <svg class="inline-block fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z"/>
                                    </svg>
                                </a>

                                <a href="" @click.prevent="setView('list')" class="text-gray-800" :class="{ 'text-orange-700 hover:text-gray-500': view != 'list' }">
                                    <svg class="inline-block fill-current h-5 w-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/>
                                    </svg>
                                </a>
                            </div>
                            <div class="float-left w-3/5">
                                <paginator :results="results" @page-selected="updatePage"></paginator>
                            </div>

                            <div class="float-left w-1/5">&nbsp;</div>
                        </div>

                        <ul class="clearfix -mx-4"v-if="view == 'gallery'">
                            <card-item v-for="card in results.data" :card="card" :key="card.identifier" :view="view" path="/cards"></card-item>
                        </ul>

                        <table v-if="view == 'list'" class="w-full table-auto border-collapse bg-white">
                            <thead>
                                <tr>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left">ID</th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left">Name</th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Standard</th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Foil</th>
                                    <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Promo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <card-list-item v-for="card in results.data" :card="card" :key="card.identifier" path="/cards"></card-list-item>
                            </tbody>
                        </table>

                        <div class="py-4">
                            <paginator :results="results" @page-selected="updatePage"></paginator>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-300 py-8">
                    <h1 class="font-serif text-xl uppercase">Search tips</h1>
                    <p class="my-4">The FabDB search tool is a powerful utility to help you find the cards you need, fast. It allows you to search for cards
                        based on their id, name, or keywords, such as: WTR001, 11, hero, equipment, weapon, sword.etc. using the keywords search field.</p>
                    <ul class="list-disc ml-4">
                        <li><strong>hero</strong>: list all cards that have the keyword 'hero'. This applies to any keyword you search for.</li>
                        <li><strong>WTR011</strong>: Look for card #11 within the Welcome to Rathe set</li>
                        <li><strong>1</strong>: Load card #1 in any set (can also be formatted as 01 or 001</li>
                        <li><strong>guardian action</strong>: Find all cards that have the keywords "guardian" and "action"</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CardSearch from './CardSearch.vue';
    import CardItem from './CardItem.vue';
    import CardListItem from './CardListItem.vue';
    import Paginator from './Paginator.vue';

    export default {
        components: {
            CardItem,
            CardListItem,
            CardSearch,
            Paginator
        },

        data() {
            return {
                page: 1,
                results: {},
                view: 'gallery'
            }
        },

        methods: {
            refreshResults: function(results) {
                this.results = results;
            },

            setView: function(view) {
                this.view = view;
            },

            updatePage: function(page) {
                this.page = page;
            }
        }
    };
</script>
