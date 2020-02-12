<template>
    <span class="inline-block rounded-full text-white" :class="classes">{{ ucfirst(subscriptionLevel) }}</span>
</template>

<script>
    import Cardable from '../CardDatabase/Cardable';

    export default {
        mixins: [Cardable],
        props: ['subscriptionLevel', 'size'],

        computed: {
            classes: function () {
                const levels = {
                    supporter: 'bg-blue-400',
                    majestic: 'bg-yellow-500',
                    legendary: 'bg-black',
                    fabled: 'bg-green-400'
                };

                let classes = {};

                classes[levels[this.subscriptionLevel]] = true;

                if (this.size === 'small') {
                    classes['px-3'] = true;
                    classes['py-1'] = true;
                    classes['text-xs'] = true;
                } else {
                    classes['px-4'] = true;
                    classes['py-2'] = true;
                }

                return classes;
            }
        }
    };
</script>