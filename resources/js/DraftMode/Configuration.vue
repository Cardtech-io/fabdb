<template>
    <div>
        <div class="bg-white border-b-4 border-gray-300">
            <div class="container sm:mx-auto px-4">
                <ul>
                    <li class="inline-block text-center font-serif uppercase">
                        <a href="" class="block py-4 mr-8" @click.prevent="setMode('draft')" :class="activeMode('draft')">
                            <svg class="fill-current h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"/>
                            </svg>
                            <div class="pt-1">Draft</div>
                        </a>
                    </li>
                    <li class="inline-block text-center font-serif uppercase">
                        <a href="" class="block py-4 mr-8" @click.prevent="setMode('sealed')" :class="activeMode('sealed')">
                            <svg class="fill-current h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M18 2a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/>
                            </svg>
                            <div class="pt-1">Sealed</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto p-4 md:flex">
                <div class="md:w-1/2 md:pr-8">
                    <form @submit.prevent="saveConfig">
                        <label class="block font-serif uppercase tracking-wide mb-1 text-sm">How many players?</label>
                        <select class="input-white focus:border-gray-500 py-3 px-4 rounded-lg">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>

                        <div class="py-4">
                            <submit text="Next"></submit>
                        </div>
                    </form>
                </div>

                <div class="md:w-1/2 mt-8 md:mt-0">
                    <p class="mb-4">
                        In draft mode, you can imitate what a real draft might be like and practise the
                        cards you would pick, in either draft, or sealed events. This mode works best if you have the
                        cards available, meaning you can virtually draft the cards and then select them from your
                        collection to play with your friends.
                    </p>

                    <p class="my-4">
                        In order to operate this mode, select the mode above, then select the number of
                        players you'll be drafting with/against.
                    </p>

                    <p class="my-4">
                        Each draft is recorded and saved so that you can both see the results, and re-play the draft.
                    </p>

                    <p class="my-4">
                        The only difference between draft and sealed is the number of packs generated for each player
                        (3 vs 6, respectively).
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mode: 'draft'
            }
        },

        methods: {
            activeMode: function(mode) {
                return {
                    'border-b-2': this.mode == mode,
                    'border-gray-800': this.mode == mode,
                    'text-gray-800': this.mode == mode,
                    'text-orange-400': this.mode != mode,
                    'hover:text-gray-800': this.mode != mode,
                }
            },

            setMode: function(mode) {
                this.mode = mode;
            }
        }
    };
</script>
