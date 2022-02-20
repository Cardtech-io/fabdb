<template>
    <div ref="hoverDiv" class="md:block z-100 absolute shadow-2xl overflow-visible rounded-xl w-250 md:w-350" :style="position" v-show="visible && card">
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
                height: 488,
                width: 350
            };
        },

        methods: {
            setPosition() {
                this.position = {
                    'top': this.top() + 'px',
                    'left': this.left() + 'px'
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

            left() {
                let left = this.coordinates[0] - this.width - 100;

                if (left < 0) {
                    left = 0;
                }

                return left;
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

        watch: {
            $route() {
                this.visible = false;
            }
        }
    };
</script>
