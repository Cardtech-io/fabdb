<template>
    <div>
        <h2 class="mt-4 border-b border-gray-500">
            <div class="flex-1 px-4 sm:px-0 py-2 uppercase font-serif">
                Rulings
            </div>
        </h2>

        <ul>
            <li v-for="ruling in rulings" class="border-b border-gray-400 last:border-0 py-2 pr-2 text-base" v-html="prettyText(ruling.description)"></li>
        </ul>
    </div>
</template>

<script>
    import Strings from '../Utilities/Strings';

    export default {
        mixins: [Strings],
        props: ['rulings'],
    };
</script>
