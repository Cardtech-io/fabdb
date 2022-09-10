<template>
    <div>
        <div class="flex space-x-1">
            <button class="flex rounded-t-lg px-4 py-2" @click="selectTab(index)" v-for="(tab, index) in tabs" :class="classes(index)">{{tab.name}}</button>
            <slot name="right"></slot>
        </div>
        <div class="bg-gray-300 dark:bg-gray-800 p-4">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            tabs: [],
        }
    },

    methods: {
        classes(index) {
            if (this.active === index) {
                return 'relative bg-gray-300 dark:bg-gray-800 -bottom-1px text-gray-800 dark:text-gray-300';
            }

            return 'bg-gray-200 dark:bg-black hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300';
        },

        selectTab(i) {
            this.active = i

            this.tabs.forEach((tab, index) => {
                tab.active = (index === i)
            })
        }
    },

    mounted () {
        this.selectTab(0);
    }
}
</script>
