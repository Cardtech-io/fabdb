<template>
    <div>
        <div class="border-gray-800 rounded-lg border p-4">
            <input type="text" v-model="searchText" placeholder="Search" class="rounded p-4 bg-black focus:outline-none w-full">
        </div>

        <div v-if="cards">
            <div class="border-gray-800 rounded-lg border my-8 clearfix mh-10 p-4">
                <paginator v-bind:results="results" @page-selected="updatePage"></paginator>
                <ul class="clearfix">
                    <card-item v-for="card in cards" v-bind:card="card" v-bind:key="card.identifier"></card-item>
                </ul>
                <paginator v-bind:results="results" @page-selected="updatePage"></paginator>
            </div>
        </div>

        <div class="border-gray-800 rounded-lg border p-4 my-8">
            <h1 class="font-serif text-xl">Search tips</h1>
            <p class="my-4">The FabDB search tool is a powerful utility to help you find the cards you need, fast. It allows you to search for cards
                based on their id, name, or keywords, such as: WTR001, 11, hero, equipment, weapon, sword.etc.</p>
            <ul class="list-disc ml-4">
                <li><strong>hero</strong>: list all cards that have the keyword 'hero'. This applies to any keyword you search for.</li>
                <li><strong>WTR011</strong>: Look for card #11 within the Welcome to Rathe set</li>
                <li><strong>1</strong>: Load card #1 in any set (can also be formatted as 01 or 001</li>
                <li><strong>guardian action</strong>: Find all cards that have the keywords "guardian" and "action"</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import CardSearch from './CardSearch';

    export default {
        mixins: [CardSearch],

        data() {
            return {
                url: '/cards'
            }
        }
    };
</script>
