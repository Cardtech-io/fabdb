<template>
    <div>
        <button type="button" class="flex-initial bg-primary hover:bg-secondary text-white rounded p-1 px-2 text-xs uppercase" @click.prevent="$modal.show('search-help')">
            SYNTAX HELP
        </button>
        <input type="text" ref="nameSearch" v-model="params.keywords" placeholder="Search..." class="flex-1 bg-transparent outline-none py-2 px-4 lg:text-gray-200" @keyup="delayedSearch" @keyup.enter="finishSearch">
        <button class="button-primary text-xs px-2" @click="showAdvancedSearch">
            <icon :size="6">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </icon>
        </button>
    </div>
</template>

<script>
    import Icon from '../Components/Icon.vue';
    import AdvancedCardSearch from "../CardDatabase/AdvancedCardSearch.vue";

    export default {
        components: {Icon},

        data() {
            return {
                params: {
                    keywords: ''
                },
                searchTimeout: null
            }
        },

        methods: {
            reset() {
                if (this.searchTimeout) {
                    clearTimeout(this.searchTimeout);
                }
            },

            delayedSearch() {
                this.reset();
                this.searchTimeout = setTimeout(() => {
                    this.$eventHub.$emit('search-requested', this.params);
                }, 700);
            },

            finishSearch() {
                this.reset();
                this.$eventHub.$emit('search-requested', this.params);
            },

            showAdvancedSearch() {
                this.$modal.show(
                    AdvancedCardSearch,
                    {
                        query: this.params
                    },
                    {
                        adaptive: true,
                        classes: ['rounded-lg', 'bg-white', 'dark:bg-gray-800'],
                        scrollable: true,
                        height: 'auto',
                        maxHeight: 300
                    }
                );
            }
        },

        mounted() {
            this.$eventHub.$on('search-completed', (results, params) => {
                if (!this.searchTimeout) {
                    this.params = params;
                }
            });

            this.$eventHub.$on('advanced-search', params => {
                this.$eventHub.$emit('search-requested', params);
            });
        }
    };
</script>
