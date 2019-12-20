<template>
    <div class="container sm:mx-auto">
        <div class="p-8 py-10 px-4">
            <h1 class="font-serif text-white text-4xl uppercase">{{ title }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title'],
    };
</script>