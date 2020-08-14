<template>
    <input type="submit" :value="text" class="appearance-none block w-full rounded-lg py-3 px-4 button-primary disabled:opacity-50">
</template>

<script>
    export default {
        props: ['disabled', 'text']
    };
</script>
