<template>
    <div class="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden md:h-220 flex flex-col">
        <header v-if="title" class="w-full bg-white dark:bg-gray-900 p-1 px-4 text-center">
            {{title}}
        </header>
        <div class="flex flex-col items-center justify-center flex-1">
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
