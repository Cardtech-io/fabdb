<template>
    <div class="flex text-sm justify-center" v-if="data">
        <button href="" class="inline-block rounded p-2 mr-1" @click="previous" :class="disabled(!data.prev)">&lt;</button>
        <button href="" class="inline-block rounded p-2 ml-1 sm:ml-0" @click="next" :class="disabled(!data.next)">&gt;</button>
    </div>
</template>

<script>
    import Search from "./Search";

    export default {
        props: ['results'],
        extends: Search,

        computed: {
            data() {
                return this.results.links;
            }
        },

        methods: {
            disabled(disabled) {
                if (disabled) {
                    return 'hidden';
                } else {
                    return 'button-secondary';
                }
            },

            next() {
                this.selectPage(this.data.next);
            },

            previous() {
                this.selectPage(this.data.prev);
            },

            selectPage(cursor) {
                cursor = cursor.replace('/?cursor=', '');
                this.cursor = cursor;
                this.requestSearch();
            }
        }
    };
</script>
