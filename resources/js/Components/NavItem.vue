<template>
    <div v-if="!item.children" class="h-full">
        <router-link :to="item.link" class="block px-4 sm:px-2 py-3 nav-item font-serif uppercase sm:h-full" @click.native="clicked(item)" :class="{ 'bg-black': isActive }">{{ item.text }}</router-link>
    </div>
    <div v-else class="h-full">
        <div class="z-50 overflow-visible h-full" :class="{ 'bg-black': open }">
            <span @click="toggleChildren" class="block h-full relative cursor-pointer px-4 sm:px-2 nav-item py-3 font-serif uppercase" :class="{ 'bg-black': isActive }">{{ item.text }}</span>
            <div v-if="open" class="sm:absolute bg-black py-1" style="min-width: 120px">
                <router-link :to="child.link" class="block px-8 py-1 sm:px-4 nav-item font-serif uppercase" @click.native="clicked(child)" v-for="child in item.children" :key="child.link">{{ child.text }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item', 'toggle', 'active'],

        data() {
            return {
                selected: false,
                open: false
            }
        },

        computed: {
            isActive: function() {
                return this.selected || (this.active && (this.active.link == this.item.link || this.hasChild(this.active)));
            }
        },

        methods: {
            hasChild: function(item) {
                return this.item.children && this.item.children.filter(child => {
                    return child.link == item.link;
                }).length;
            },

            toggleChildren: function() {
                this.open = !this.open;
            },

            openChildren: function() {
                this.open = true;
            },

            closeChildren: function() {
                this.open = false;
            },

            clicked: function(item) {
                this.$emit('clicked', item);
                this.selected = true;
                this.closeChildren();
            }
        },

        watch: {
            active: function(newValue, oldValue) {
                this.closeChildren();
                this.selected = false;
            }
        }
    };
</script>
