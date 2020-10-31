<template>
    <div class="container sm:mx-auto hidden sm:block">
        <div class="p-4 md:py-8">
            <slot name="title">
                <h1 class="font-serif text-white text-4xl uppercase" v-if="title">{{ title }}</h1>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title'],
    };
</script>
