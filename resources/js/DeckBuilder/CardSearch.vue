<template>
    <div>
        <button class="flex-initial ml-4 link" @click="$modal.show('search-help')">
            <icon :size="6">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </icon>
        </button>
        <input type="text" ref="nameSearch" v-model="params.keywords" placeholder="Search" class="flex-1 bg-transparent outline-none py-2 px-4 lg:text-gray-200" @keyup="delayedSearch" @keyup.enter="finishSearch">
        <button class="button-primary text-xs px-2" @click="showAdvancedSearch">
            <icon :size="6">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </icon>
        </button>
    </div>
</template>

<script>
    import Icon from '../Components/Icon';
    import AdvancedCardSearch from "../CardDatabase/AdvancedCardSearch";

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
                        classes: ['rounded-lg'],
                        scrollable: true,
                        height: 'auto',
                        maxHeight: 300
                    }
                );
            }
        },

        mounted() {
            this.$eventHub.$on('search-completed', (results, params) => {
                this.params = params;
            });

            this.$eventHub.$on('advanced-search', params => {
                this.$eventHub.$emit('search-requested', params);
            });
        }
    };
</script>
