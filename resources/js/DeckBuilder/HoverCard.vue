<template>
    <div class="hidden md:block z-100 absolute shadow-2xl overflow-visible rounded-xl" :style="position()" v-if="visible && card">
        <card-image :card="card" :width="width" v-if="card"/>
    </div>
</template>

<script>
    import CardImage from "../CardDatabase/CardImage";

    export default {
        components: { CardImage },

        data() {
            return {
                card: false,
                coordinates: [],
                visible: false,
                width: 350
            };
        },

        methods: {
            position() {
                let top = this.coordinates[1] + window.scrollY - 200;

                if (top < 0) {
                    top = 100;
                }

                return {
                    'width': this.width + 'px',
                    'top': top + 'px',
                    'left': this.coordinates[0] - this.width - 100 + 'px'
                };
            },

            toggle(card) {
                this.card = card;

                if (this.card) {
                    this.coordinates = [window.event.clientX, window.event.clientY];

                    setTimeout(() => {
                        this.visible = true;
                    }, 250);
                } else {
                    this.visible = false;
                }
            }
        },

        created() {
            this.$eventHub.$on('hover-card', this.toggle);
        },
    };
</script>
