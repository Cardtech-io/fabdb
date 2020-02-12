<template>
    <h2 class="font-serif uppercase text-lg mt-4 px-4 sm:px-0">{{ comments ? comments.length : 0 }} comments.</h2>
</template>

<script>
    export default {
        props: ['comments']
    };
</script>