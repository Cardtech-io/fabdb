<template>
    <div ref="hoverDiv" class="hidden md:block z-100 absolute shadow-2xl overflow-visible rounded-xl" :style="position" v-show="visible && card">
        <card-image :card="card" :width="width" v-if="card" :click-handler="hide"/>
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
                position: {},
                visible: false,
                width: 350,
                height: 488
            };
        },

        methods: {
            setPosition() {
                this.position = {
                    'width': this.width + 'px',
                    'top': this.top() + 'px',
                    'left': this.coordinates[0] - this.width - 100 + 'px'
                };
            },

            top() {
                if (!this.$refs.hoverDiv) {
                    return 0;
                }

                let top = this.coordinates[1] + window.scrollY - 200;
                let maxTop = window.innerHeight + window.scrollY - this.height - 50;

                if (top < window.scrollY) {
                    top = window.scrollY + 100;
                }

                if (top > maxTop) {
                    top = maxTop;
                }

                return top;
            },

            toggle(card) {
                this.card = card;

                if (this.card) {
                    this.coordinates = [window.event.clientX, window.event.clientY];
                    this.setPosition();

                    setTimeout(() => {
                        this.visible = true;
                    }, 150);

                    setTimeout(() => {

                    }, 155);
                } else {
                    this.visible = false;
                }
            },

            hide() {
                this.visible = false;
            }
        },

        created() {
            this.$eventHub.$on('hover-card', this.toggle);
        },
    };
</script>
