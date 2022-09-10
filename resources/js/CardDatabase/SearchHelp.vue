<template>
    <div>
        <header class="bg-secondary flex items-center text-white">
            <div class="m-4 mr-2">
                <icon :size="6">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </icon>
            </div>
            <h2 class="flex-grow relative font-serif text-xl uppercase">
                Search syntax help
                <button class="absolute top-0 right-0 mr-2 -mt-1" @click="hide()">
                    <icon :size="6">
                        <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"/>
                    </icon>
                </button>
            </h2>
        </header>
        <div class="m-4 text-base overflow-y">
            <h2 class="font-serif text-xl uppercase">Card stats available to search:</h2>
            <ul class="list-disc ml-8 my-4">
                <li>pitch</li>
                <li>power</li>
                <li>cost</li>
                <li>defense</li>
            </ul>
            <p class="my-4">Modifiers available are: &lt;, &gt;, and =</p>
            <p class="my-4">These stats can be used either on their own, or chained together, for example:</p>
            <input type="text" class="input py-3 px-4 rounded-lg" value="pitch=2 power=5 cost>0">
            <p class="my-4">You can also search using plain keywords. Looking for Back Alley Breakline (red)?</p>
            <input type="text" class="input py-3 px-4 rounded-lg" value="back alley pitch=1">
            <p class="my-4">Please note that if you wish to use spaces in your syntax, you must wrap your arguments in quotes, eg:</p>
            <input type="text" class="input py-3 px-4 rounded-lg" value="&quot;go again&quot; attack &quot;power > 4&quot; pitch<3">
            <p class="italic bg-blue-200 p-4 mt-4 -mx-4 -mb-4 text-center">Note: FaB DB's deck builder will automatically filter cards by your chosen hero's class, and generics.</p>
        </div>
    </div>
</template>

<script>
    import Icon from "../Components/Icon";

    export default {
        components: {Icon},

        methods: {
            hide() {
                this.$modal.hide('search-help');
            }
        }
    };
</script>
