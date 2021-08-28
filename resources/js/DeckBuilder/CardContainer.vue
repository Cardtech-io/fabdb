<template>
    <div :class="cardClasses">
        <slot></slot>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        props: ['width'],
        
        computed: {
            ...mapState('deck', ['zoom']),

            cardClasses() {
                return this.width || 'w-1/2 sm:w-1/' + (this.cardWidth - 2) + ' sm:w-1/' + (this.cardWidth - 1) + '  md:w-1/' + this.cardWidth
            },

            cardWidth() {
                let widths = [3, 4, 5, 6, 7, 8];

                return widths[this.zoom];
            },
        }
    }
</script>
