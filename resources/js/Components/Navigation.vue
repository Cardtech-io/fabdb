<template>
    <nav class="flex sm:ml-4 mt-6 sm:float-left sm:flex-none">
        <router-link to="/" class="w-1/3 text-center text-gray-500 bg-gray-900 hover:bg-gray-800 p-3 rounded-l-lg sm:rounded-lg sm:ml-4 sm:w-auto">Database</router-link>
        <router-link to="/collection/" class="w-1/3 text-center text-gray-500 bg-gray-900 hover:bg-gray-800 p-3 sm:rounded-lg sm:ml-4 sm:w-auto">My collection</router-link>
        <router-link to="/deck-builder/" class="w-1/3 text-center text-gray-500 bg-gray-900 hover:bg-gray-800 p-3 sm:rounded-lg sm:ml-4 sm:w-auto">Deck builder</router-link>
        <router-link to="/support/" class="w-1/3 text-center text-gray-500 bg-gray-900 hover:bg-gray-800 rounded-r-lg p-3 sm:rounded-lg sm:ml-4 sm:w-auto">Support</router-link>
    </nav>
</template>

<script>
    export default {

    }
</script>