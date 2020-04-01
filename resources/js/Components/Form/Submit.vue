<template>
    <input type="submit" :value="text" class="appearance-none block w-full bg-orange-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-orange-500 disabled:opacity-50">
</template>

<script>
    export default {
        props: ['text']
    };
</script>