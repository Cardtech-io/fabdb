<template>
    <div class="container sm:mx-auto hidden sm:block">
        <div class="p-4 md:py-8">
            <h1 class="font-serif text-white text-4xl uppercase">{{ title }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title'],
    };
</script>