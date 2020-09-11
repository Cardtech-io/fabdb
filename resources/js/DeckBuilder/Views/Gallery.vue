<template>
    <div>
        <h2 class="block flex cursor-pointer font-serif uppercase text-lg mx-4" @click="toggleSection({ section: 'hero' })" :class="{ 'mb-4': !sections.hero }">
            <chevron :open="sections.hero" class="mr-2"></chevron>
            Hero &amp; weapons
        </h2>
        <grouped-cards :cards="loadout" group-id="loadout" :action="mode == 'search' ? removeFromDeck : false" v-show="sections.hero">
            <template v-slot:default="props">
                <div style="margin-top: -28px" class="hidden sm:block" :class="props.classes" v-masonry-tile>
                    <div class="mx-2 mb-12">
                        <h3 class="font-serif uppercase text-lg">Totals</h3>
                        <totals class="mt-4"></totals>
                    </div>
                </div>
                <div style="margin-top: -28px" class="hidden sm:block" :class="props.classes" v-masonry-tile>
                    <div class="mx-2">
                        <h3 class="font-serif uppercase text-lg">General</h3>
                        <general class="mt-4"></general>
                    </div>
                </div>
            </template>
        </grouped-cards>
    </div>
    <div v-if="equipment.total()">
        <h2 class="block flex cursor-pointer font-serif uppercase text-lg mx-4" @click="toggleSection({ section: 'equipment' })" :class="{ 'mb-4': !sections.equipment }">
            <chevron :open="sections.equipment" class="mr-2"></chevron>
            Equipment ({{ equipment.total() }})
        </h2>
        <grouped-cards :cards="equipment" group-id="equipment" :action="mode == 'search' ? removeFromDeck : false" v-show="sections.equipment"></grouped-cards>
    </div>
    <div v-if="other.total()">
        <h2 class="block flex cursor-pointer font-serif uppercase text-lg ml-4" @click="toggleSection({ section: 'other' })" :class="{ 'mb-4': !sections.other }">
            <chevron :open="sections.other" class="mr-2"></chevron>
            Other ({{ other.total() }})
        </h2>
        <grouped-cards :cards="other" group-id="other" :action="mode == 'search' ? removeFromDeck : false" v-show="sections.other"></grouped-cards>
    </div>
</template>

<script>
    export default {
        name: "Gallery"
    }
</script>
