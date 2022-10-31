<template>
    <div class="fixed top-0 right-0 bottom-0 left-0 transition-all z-50" :class="classes" @click="iveSeenThis">
        <!-- Overlay -->
        <div class="fixed bg-black h-full w-full z-75"></div>
        <div class="fixed flex items-center justify-center h-full w-full z-100">
            <div class="p-4 rounded-xl overflow-hidden min-w-1/2 m-4 space-y-8 -mt-24">
                <img src="@/images/fabdb-logo-3d.png" alt="" style="max-width: 470px" class="w-250 mx-auto">
                <transition name="fade" mode="out-in">  
                    <div v-for="(s, i) in stages" v-if="i === stage" v-html="s" :key="'stage'+i" class="font-serif uppercase text-lg text-center text-gray-300"></div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import Imagery from "../Utilities/Imagery";

export default {
    mixins: [Imagery],

    data: () => ({
        stage: 0,
        stages: [],
        visible: false
    }),

    computed: {
        classes() {
            return this.visible ? 'opacity-100' : 'opacity-0';
        }
    },

    methods: {
        iveSeenThis() {
            localStorage.setItem('spoiler.seen', moment().toString());
            this.visible = false;
        },
        nextStage() {
            this.stage++;

            if (this.stage < this.stages.length - 1) {
                setTimeout(this.nextStage, 3500);
            }
        }
    },

    mounted() {
        this.stages = [
            'A contract is an agreement that must be respected...',
            'An agreement that must be honored...',
            'An agreement that must be paid...',
            'No matter your station in life.',
            'FaB DB Would like to present it\'s Dynasty preview for this season:',
            `<img src="${this.cardImageFromSku('DYN124')}">`
        ];

        const seen = localStorage.getItem('spoiler.seen');
        const now = moment();

        if (!seen) {
            this.visible = true;
        }
        else {
            const duration = moment.duration(now.diff(seen));

            // If they last saw it 2 or more months ago, it's good to be shown again.
            this.visible = duration.asMonths() >= 2;
        }
    },

    watch: {
        visible(value) {
            if (value) {
                setTimeout(this.nextStage, 3500);
            }
        }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .75s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
