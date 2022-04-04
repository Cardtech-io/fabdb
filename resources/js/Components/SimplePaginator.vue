<template>
    <div class="flex text-sm justify-center" v-if="data">
        <a href="" class="inline-block rounded p-2 mr-1" @click.prevent="previous" :class="disabled(!data.prev)">&lt;</a>
        <a href="" class="inline-block rounded p-2 ml-1 sm:ml-0" @click.prevent="next" :class="disabled(!data.next)">&gt;</a>
    </div>
</template>

<script>
    export default {
        props: ['results'],

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

                this.$emit('cursor-selected', cursor);
            }
        }
    };
</script>
