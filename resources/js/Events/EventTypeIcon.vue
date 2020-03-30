<template>
    <svg class="fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" :class="sizes()">
        <title v-if="title">{{ ucfirst(title) }}</title>
        <path :d="path()"/>
    </svg>
</template>

<script>
    import Strings from '../Utilities/Strings';

    export default {
        mixins: [ Strings ],
        props: ['type', 'size', 'title'],

        methods: {
            path: function() {
                let types = {
                    constructed: 'M6 4H5a1 1 0 110-2h11V1a1 1 0 00-1-1H4a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V5a1 1 0 00-1-1h-7v8l-2-2-2 2V4z',
                    draft: 'M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z',
                    sealed: 'M18 2a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z'
                };

                return types[this.type];
            },

            sizes: function() {
                return 'h-' + this.size +' w-' + this.size;
            }
        }
    };
</script>
