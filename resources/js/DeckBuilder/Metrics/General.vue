<template>
    <div>
        <ol class="mt-2 text-base">
            <stat :value="averageCost" text="Avg cost" position="top"></stat>
            <stat :value="averagePitch" text="Avg pitch"></stat>
            <stat :value="pitchCount(1)" text="Pitch 1"></stat>
            <stat :value="pitchCount(2)" text="Pitch 2"></stat>
            <stat :value="pitchCount(3)" text="Pitch 3"></stat>
            <stat :value="costCount(0)" text="Cost 0"></stat>
            <stat :value="costCount(1)" text="Cost 1"></stat>
            <stat :value="costCount(2)" text="Cost 2"></stat>
            <stat :value="costCount(3)" text="Cost 3+" position="bottom"></stat>
        </ol>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Stat from "./Stat";
    import Viewable from "../Viewable";

    export default {
        mixins: [Viewable],
        components: {Stat},

        computed: {
            ...mapState('deck', ['cards']),
        }
    }
</script>
