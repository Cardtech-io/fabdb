<template>
    <div class="container sm:mx-auto flex">
        <div class="w-1/3 pr-8 py-40">
            <h1 class="font-serif text-white text-6xl uppercase">Welcome</h1>
            <p class="text-white">FaB DB is an unofficial, Flesh & Blood TCG website, with various features such as deck builder, collection manager and more.</p>
        </div>

        <div class="w-2/3 bg-semi-black rounded-lg py-8 px-4 my-20">
            <h1 class="font-serif text-white text-4xl uppercase pl-4">Features</h1>
            <ol class="text-white">
                <li>
                    <router-link to="/browse/">
                        <span class="inline-block hover:bg-black hover:text-orange-300 rounded-lg p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="block float-left fill-current w-10 h-10 mt-1 mr-4">
                                <path d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z"/>
                            </svg>

                            Browse the entire Flesh & Blood card collection right here, using it as a basis to manage your own card collection,
                            or add to that touranment-winning deck!
                        </span>
                    </router-link>
                </li>

                <li class="mt-4">
                    <router-link to="/collection/">
                        <span class="inline-block hover:bg-black hover:text-orange-300  rounded-lg p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="block float-left fill-current w-10 h-10 mt-1 mr-4">
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                            </svg>

                            Manage your collection by adding and removing cards, recording the foils and promos you own, and share what you are
                            looking for, or willing to trade!
                        </span>
                    </router-link>
                </li>

                <li class="mt-4">
                    <router-link to="/deck-builder/">
                        <span class="inline-block hover:bg-black hover:text-orange-300  rounded-lg p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="block float-left fill-current w-10 h-10 mt-1 mr-4">
                                <path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"/>
                            </svg>

                            Craft decks, by selecting your hero, weapons & equipment and the cards they'll
                            need in battle. Finally, when you're ready, export the deck to an officially supported PDF format for tournaments!
                        </span>
                    </router-link>
                </li>
            </ol>
            <p>

            </p>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>