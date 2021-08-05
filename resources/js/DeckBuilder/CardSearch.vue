<template>
    <div>
        <input type="text" ref="nameSearch" v-model="keywords" placeholder="Search" class="flex-1 bg-transparent outline-none py-3 px-4 text-gray-200" @keyup="delayedSearch" @keyup.enter="finishSearch">
        <button class="flex-initial mr-4 link-alternate" @click="$modal.show('search-help')">
            <icon :size="6">
                <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
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
