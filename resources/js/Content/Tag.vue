<template>
    <router-link :to="{ name: 'articles.tag', params: { tag: kebabCase(ucfirst(tag.trim())) } }" class="rounded inline-block py-1 px-2 mr-2">
        {{ ucfirst(tag.trim()) }}
    </router-link>
</template>

<script>
    import Strings from '../Utilities/Strings';

    export default {
        props: {
            tag: {
                type: String,
                required: true
            }
        },

        mixins: [Strings]
    };
</script>
