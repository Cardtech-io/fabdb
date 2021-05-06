<template>
    <div>
        <header-title title="Sealed practise"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto px-4 py-8">
                <p class="bg-white p-4">
                    Each sealed practise will generate a number of packs, that can then be viewed
                    and saved for future reference. This will allow you to test with and build decks
                    based on the random nature of the booster packs, and even be able to practise
                    with especially bad drafts.
                </p>
                <div class="my-4 text-center">
                    <router-link :to="{ name: 'practise.setup' }" class="inline-block mx-auto button-primary px-4 py-3 rounded-lg">Draft packs</router-link>
                </div>
                <p class="p-4 italic">
                    Sealed practise is available to Majestic and Legendary supporters only.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Practise mode' }
                ],
            }
        }
    }
</script>
