<template>
    <div v-masonry destroy-delay="2000" :containerId="containerId" transition-duration="0.3s">
        <slot></slot>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import Redrawable from "./Redrawable.js";

    export default {
        props: {
            containerId: {
                type: String,
                required: true
            }
        },

        mixins: [Redrawable],

        computed: {
            ...mapState('deck', ['fullScreen', 'grouping', 'mode', 'zoom']),
        },

        watch: {
            cards() {
                this.redraw(this.groupId);
            },

            fullScreen() {
                this.redraw(this.groupId);
            },

            grouping() {
                this.redraw(this.groupId);
            },

            mode() {
                this.redraw(this.groupId);
            },

            zoom() {
                this.redraw();
            }
        }
    }
</script>
