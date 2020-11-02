<template>
    <div>
        <header class="bg-primary flex items-center text-white">
            <div class="m-4">
                <icon :size="8">
                    <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z"/>
                </icon>
            </div>
            <h2 class="font-serif text-2xl uppercase">Search syntax help</h2>
        </header>
        <div class="m-4 text-base">
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
            <p class="my-4">The more conditions and clauses you add, the more specific and targeted the search results become, for example:</p>
            <input type="text" class="input py-3 px-4 rounded-lg" value="go again attack power>4 pitch<3">
            <p class="italic bg-blue-200 p-4 mt-4 -mx-4 -mb-4 text-center">Note: FaB DB's deck builder will automatically filter cards by your chosen hero's class, and generics.</p>
        </div>
    </div>
</template>

<script>
    import Icon from "../Components/Icon";

    export default {
        components: {Icon}
    };
</script>
