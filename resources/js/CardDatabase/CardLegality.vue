<template>
    <div class="absolute w-full text-white text-sm text-center py-1 z-50 -mt-2" style="bottom: 40.35%" :class="colour()" v-if="card.legality">
        {{ text() }}
    </div>
</template>

<script>
    import Legality from "./Legality/Legality";

    export default {
        props: {
            card: {
                required: true
            }
        },

        extends: Legality,

        methods: {
            colour() {
                return this.colours[this.highestLevel()];
            },

            highestLevel() {
                let level = 0;
                let levels = ['', 'suspended', 'legend', 'banned'];
                let values = Object.values(this.card.legality);

                for (let i in values) {
                    if (levels.indexOf(values[i]) > level) {
                        level = levels.indexOf(values[i]);
                    }
                }

                return levels[level];
            },

            text() {
                return this.texts[this.highestLevel()];
            }
        }
    };
</script>
