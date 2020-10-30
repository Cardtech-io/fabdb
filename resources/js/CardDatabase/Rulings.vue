<template>
    <div>
        <h2 class="border-b border-gray-500">
            <div class="flex-1 py-2 uppercase font-serif">
                Rulings, Clarifications, Erratas.etc.
            </div>
        </h2>

        <ul>
            <li v-for="ruling in rulings" class="border-b border-gray-400 last:border-0 py-1 pr-4 sm:pr-2 text-base sm:-pl-4" v-html="minimalMarkdown(ruling)"></li>
        </ul>
    </div>
</template>

<script>
    import Strings from '../Utilities/Strings';

    export default {
        mixins: [Strings],
        props: ['rulings']
    };
</script>
