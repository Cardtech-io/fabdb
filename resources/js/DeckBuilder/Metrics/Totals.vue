<template>
    <div>
        <ol class="mt-2">
            <stat :value="totalCards" text="Cards" position="top"></stat>
            <stat :value="totalClass" text="Class"></stat>
            <stat :value="totalGeneric" text="Generic" position="bottom"></stat>
        </ol>

        <ol class="mt-4 text-base">
            <stat :value="totalActions" text="Actions" position="top"></stat>
            <stat :value="totalAttackActions" text="Att. actions"></stat>
            <stat :value="totalAttackReactions" text="Att. reactions"></stat>
            <stat :value="totalDefenseReactions" text="Def. reactions"></stat>
            <stat :value="totalInstants" text="Instants" position="bottom"></stat>
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
