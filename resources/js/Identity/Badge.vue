<template>
    <span class="inline-block rounded-full text-white px-4 py-2" :class="subscriptionColour">{{ ucfirst(subscriptionLevel) }}</span>
</template>

<script>
    import Cardable from '../CardDatabase/Cardable';

    export default {
        mixins: [Cardable],
        props: ['subscriptionLevel'],

        computed: {
            subscriptionColour: function () {
                const levels = {
                    supporter: 'bg-blue-400',
                    majestic: 'bg-yellow-500',
                    legendary: 'bg-black',
                    fabled: 'bg-green-400'
                };

                return levels[this.subscriptionLevel];
            }
        }
    };
</script>