<template>
    <div class="flex text-sm justify-center" v-if="data">
        <a href="" class="inline-block rounded p-2 mr-1" @click.prevent="previous" :class="disabled(data.current_page == 1)">&lt;</a>
        <span class="inline-block rounded overflow-hidden">
            <a v-for="n in pageRange" href="" class="inline-block sm:rounded p-2 sm:mr-1 button-primary" :class="active(n)" @click.prevent="select(n)">{{ n }}</a>
        </span>
        <a href="" class="inline-block rounded p-2 ml-1 sm:ml-0" @click.prevent="next" :class="disabled(data.current_page >= data.last_page)">&gt;</a>
    </div>
</template>

<script>
    export default {
        props: ['results'],

        computed: {
            data() {
                if (this.results.meta) {
                    return this.results.meta;
                } else {
                    return this.results;
                }
            },

            pageRange: function() {
                const rangeLimit = 6;
                const currentPage = this.data.current_page;
                const lastPage = this.data.last_page;

                let first = currentPage - 3;

                if (first + rangeLimit > lastPage) {
                    first = lastPage - rangeLimit;
                }

                if (first < 1) {
                    first = 1;
                }

                let last = first + rangeLimit;

                if (last > lastPage) {
                    last = lastPage;
                }

                var range = [];

                for (var i = first; i <= last; i++) {
                    range.push(i);
                }

                return range;
            }
        },

        methods: {
            active: function(n) {
                return {
                    'button-secondary': this.data.current_page === n
                }
            },

            disabled: function(disabled) {
                if (disabled) {
                    return 'hidden';
                } else {
                    return 'button-secondary';
                }
            },

            select: function(page) {
                this.selectPage(page);
            },

            next: function() {
                if (this.data.current_page >= this.data.last_page) return;

                this.selectPage(this.data.current_page + 1);
            },

            previous: function() {
                if (this.results.current_page <= 1) return;

                this.selectPage(this.data.current_page - 1);
            },

            selectPage: function(page) {
                this.$emit('page-selected', page);
            }
        }
    };
</script>
