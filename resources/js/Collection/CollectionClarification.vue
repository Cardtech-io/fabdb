<template>
    <div class="p-4 px-8">
        <header>
            <h1 class="font-serif uppercase text-4xl text-center text-gray-200">Important!</h1>
        </header>

        <div class="text-gray-500">
            <p class="my-4">
                FaB DB is making a major change to how card data is stored and accessed.
            </p>

            <p class="my-4">
                Unfortunately, we cannot differentiate between first and unlimited editions in your collection. The
                upcoming change means that the way collections will be managed may not be backwards-compatible with your
                existing cards in the collection manager. However, we want to ensure that our change is as friendly to
                your collection as possible.
            </p>

            <p class="my-4">
                In order to navigate this embarrassing mistake, we must ask you to see specify whether your collection
                is predominantly alpha/first editions, or unlimited edition.
            </p>

            <div class="mx-auto pb-8 text-center">
                <p class="text-center mb-8 text-gray-200">My collection on FaB DB is predominantly...</p>
                <button class="button-primary py-2 px-4 rounded-lg">Alpha/First</button>
                <button class="button-primary py-2 px-4 rounded-lg">Unlimited</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CollectionClarification"
}
</script>
