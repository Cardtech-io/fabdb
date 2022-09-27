<template>
    <div>
        <ol class="mt-2">
            <stat :value="cards.total()" text="Cards" position="top"/>
            <stat :value="cards.forClass().total()" text="Class"/>
            <stat :value="cards.forGeneric().total()" text="Generic" position="bottom"/>
        </ol>

        <ol class="mt-4 text-base">
            <stat :value="cards.nonAttackActions().total()" text="Non-att. actions" position="top"/>
            <stat :value="cards.attackActions().total()" text="Att. actions"/>
            <stat :value="cards.attackReactions().total()" text="Att. reactions"/>
            <stat :value="cards.defenseReactions().total()" text="Def. reactions"/>
            <stat :value="cards.instants().total()" text="Instants" position="bottom"/>
        </ol>
    </div>
</template>

<script>
    import Stat from "./Stat.vue";
    import Cards from "../Cards";

    export default {
        components: {Stat},

        props: {
            cards: {
                required: true,
                type: Cards
            }
        }
    }
</script>
