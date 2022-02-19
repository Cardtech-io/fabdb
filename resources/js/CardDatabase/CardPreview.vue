<template>
    <div>
        <header class="flex justify-between bg-gray-100 p-2 px-4">
            <h2 class="font-serif uppercase text-lg">{{card.name}}</h2>
            <button class="absolute top-0 right-0 mr-2 mt-2" @click="$modal.hideAll()">
                <icon :size="6">
                    <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"/>
                </icon>
            </button>
        </header>
        <section class="p-4">
            <div class="flex flex-col sm:flex-row sm:space-x-4">
                <div class="sm:w-2/5">
                    <button @click="$modal.hideAll()">
                        <card-image :card="card"/>
                    </button>
                </div>
                <div class="sm:w-3/5">
                    <div v-html="prettyText(card.text)"></div>
                    <div class="flex space-x-6 my-4">
                        <div v-for="(value, stat) in card.stats" class="flex items-center bg-white space-x-2 py-2" v-if="!isNaN(value)">
                            <div>
                                <img :src="statToImagePath(stat, value)" :alt="sentenceCase(stat)" class="h-6" :title="sentenceCase(stat)">
                            </div>
                            <div>{{ value }}</div>
                        </div>
                    </div>
                    <div class="flex text-sm space-x-1">
                        <tcg-player :buy-link="card.buyLink" class="w-1/2"/>
                        <a :href="'/cards/'+card.identifier" target="_blank" class="w-1/2 flex justify-end items-center text-right space-x-2 bg-gray-50 hover:bg-white border border-gray-400 hover:border-black rounded p-2 py-1">
                            <span>View card</span>
                            <icon :size="5">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </icon>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <footer class="flex justify-between bg-secondary">
            <button @click="previous" class="flex items-center button-secondary p-2 px-4" v-if="hasPrevious">
                <icon :size="5">
                    <path fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </icon>
                <span>Previous</span>
            </button>
            <button @click="next" class="flex items-center button-secondary p-2 px-4" v-if="hasNext">
                <span>Next</span>
                <icon :size="5">
                    <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </icon>
            </button>
        </footer>
    </div>
</template>

<script>
    import Imagery from "../Utilities/Imagery";
    import Strings from "../Utilities/Strings";

    export default {
        mixins: [Imagery, Strings],

        props: {
            stack: {
                type: Array,
                required: true
            },

            index: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                card: this.stack[this.index]
            };
        },

        computed: {
            hasPrevious() {
                return this.index > 0;
            },

            hasNext() {
                return this.index < this.stack.length-1
            }
        },

        methods: {
            next() {
                this.card = this.stack[this.index+1];
            },

            previous() {
                this.card = this.stack[this.index-1];
            },

            statToImagePath(stat, value) {
                if (stat === 'cost') return '/img/resource.png';
                if (stat === 'resource') return '/img/pitch-'+value+'.png';

                return '/img/'+stat+'.png';
            }
        }
    }
</script>
