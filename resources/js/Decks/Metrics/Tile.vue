<template>
    <div class="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden flex flex-col">
        <header v-if="title" class="block w-full bg-white dark:bg-gray-900 p-1 px-4 text-center">
            {{title}}
        </header>
        <div class="md:flex md:flex-col md:items-center md:justify-center md:flex-1">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    }
}
</script>
