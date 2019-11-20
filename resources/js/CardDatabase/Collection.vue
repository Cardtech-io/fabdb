<template>
    <div>
        <div class="border-gray-800 rounded-lg border p-4">
            <input type="text" v-model="searchText" placeholder="Search" class="rounded p-4 bg-black focus:outline-none w-full">
        </div>

        <div>
            <div class="border-gray-800 rounded-lg border my-8 clearfix mh-10 p-4">
                <paginator v-bind:results="results" @page-selected="updatePage"></paginator>
                <ul class="clearfix">
                    <card-item v-for="card in cards" v-bind:card="card" v-bind:key="card.identifier"></card-item>
                </ul>
                <paginator v-bind:results="results" @page-selected="updatePage"></paginator>
            </div>
        </div>
    </div>
</template>

<script>
    import CardSearch from './CardSearch';

    export default {
        mixins: [CardSearch],

        data() {
            return {
                url: '/collection'
            }
        }
    };
</script>
