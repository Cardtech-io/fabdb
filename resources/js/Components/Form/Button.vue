<template>
    <input type="button" :value="text" class="appearance-none block w-full bg-orange-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-orange-500">
</template>

<script>
    export default {
        props: ['text']
    };
</script>