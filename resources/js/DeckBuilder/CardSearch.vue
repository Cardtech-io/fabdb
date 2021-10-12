<template>
    <div>
        <input type="text" ref="nameSearch" v-model="keywords" placeholder="Search" class="flex-1 bg-transparent outline-none py-2 px-4 lg:text-gray-200" @keyup="delayedSearch" @keyup.enter="finishSearch">
        <button class="flex-initial mr-4 link-alternate" @click="$modal.show('search-help')">
            <icon :size="6">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </icon>
        </button>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Icon from '../Components/Icon';

    export default {
        components: {Icon},

        data() {
            return {
                keywords: '',
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
                    this.$eventHub.$emit('search-requested', this.keywords);
                }, 700);
            },

            finishSearch() {
                this.reset();
                this.$eventHub.$emit('search-requested', this.keywords);
            }
        }
    };
</script>
