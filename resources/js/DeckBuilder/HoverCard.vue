<template>
    <div class="z-100 absolute" :style="position()" v-if="visible">
        <card-image :card="card" :width="width" v-if="card"/>
    </div>
</template>

<script>
    import CardImage from "../CardDatabase/CardImage";

    export default {
        props: ['card'],
        components: { CardImage },

        data() {
            return {
                coordinates: [],
                visible: false,
                width: 350
            };
        },

        methods: {
            position() {
                console.log(this.coordinates);
                return {
                    'width': '350px',
                    'top': this.coordinates[1] + 'px',
                    'left': this.coordinates[0] - this.width - 100 + 'px'
                };
            }
        },

        watch: {
            card(card) {
                if (!card) {
                    this.visible = false;
                    return;
                }

                this.coordinates = [window.event.clientX, window.event.clientY];

                setTimeout(() => {
                    this.visible = true;
                }, 500);
            }
        }
    };
</script>
