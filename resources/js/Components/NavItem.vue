<template>
    <div v-if="!item.children">
        <router-link :to="item.link" class="block px-4 sm:px-2 py-2 text-white font-serif uppercase hover:bg-black hover:text-orange-400" @click.native="toggle">{{ item.text }}</router-link>
    </div>
    <div v-else>
        <div class="z-50 overflow-visible" :class="{ 'bg-black': open }">
            <span @click="toggleChildren" class="block relative cursor-pointer px-4 sm:px-2 py-2 text-white font-serif uppercase hover:bg-black hover:text-orange-400">{{ item.text }}</span>
            <div v-if="open" class="sm:absolute bg-black py-1">
                <router-link :to="child.link" class="block px-8 py-1 sm:px-4 text-white font-serif uppercase hover:bg-black hover:text-orange-400" @click.native="toggle" v-for="child in item.children" :key="child.link">{{ child.text }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item', 'toggle'],

        data() {
            return {
                open: false
            }
        },

        methods: {
            toggleChildren: function() {
                this.open = !this.open;
            },

            openChildren: function() {
                this.open = true;
            },

            closeChildren: function() {
                this.open = false;
            }
        }
    };
</script>
