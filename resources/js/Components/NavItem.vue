<template>
    <div v-if="!item.children" class="sm:h-full">
        <router-link :to="item.link" class="block px-4 sm:px-2 py-3 nav-item font-serif uppercase sm:h-full" @click.native="clicked(item)" :class="{ 'bg-black': isActive }">{{ item.text }}</router-link>
    </div>
    <div v-else class="h-full">
        <div class="z-50 overflow-visible sm:h-full" :class="{ 'bg-black': open }">
            <span @click="toggleChildren" class="block sm:h-full relative cursor-pointer px-4 sm:px-2 nav-item py-3 font-serif uppercase" :class="{ 'bg-black': isActive }">{{ item.text }}</span>
            <div v-if="open" class="sm:absolute bg-black py-1" style="min-width: 120px">
                <span v-for="child in item.children" :key="child.link">
                    <router-link :to="child.link" class="block px-8 py-1 sm:px-4 nav-item font-serif uppercase" @click.native="clicked(child)" v-if="child.link.indexOf('https') === -1">{{ child.text }}</router-link>
                    <a :href="child.link" class="block px-8 py-1 sm:px-4 nav-item font-serif uppercase" @click="clicked(child)" target="_blank" v-else>{{ child.text }}</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item', 'toggle', 'active', 'opened'],

        data() {
            return {
                selected: false,
                open: false
            }
        },

        computed: {
            isActive() {
                return this.selected || (this.active && (this.active.link == this.item.link || this.hasChild(this.active)));
            }
        },

        methods: {
            hasChild(item) {
                return this.item.children && this.item.children.filter(child => {
                    return child.link == item.link;
                }).length;
            },

            toggleChildren() {
                this.open = !this.open;
            },

            openChildren() {
                this.open = true;
            },

            closeChildren() {
                this.open = false;
            },

            clicked(item) {
                this.$emit('clicked', item);
                this.closeChildren();
            }
        },

        watch: {
            active(newValue, oldValue) {
                this.closeChildren();
                this.selected = false;
            },

            open(value) {
                if (value) {
                    this.$emit('opened', this.item);
                }
            },

            opened(openedItem) {
                if (openedItem !== this.item && !this.hasChild(openedItem)) {
                    this.closeChildren();
                }
            }
        }
    };
</script>
