<template>
    <button type="submit" class="appearance-none block w-full rounded-lg py-3 px-4 button-primary disabled:opacity-50">
        {{ text }}
    </button>
</template>

<script>
    export default {
        props: ['disabled', 'text']
    };
</script>
