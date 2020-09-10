<template>
    <img :src="imageUrl('/heroes/' + avatar + '.jpg', width)" :alt="user.name" :class="'rounded-full'">
</template>

<script>
    import Imagery from '../Utilities/Imagery';

    export default {
        mixins: [ Imagery ],

        props: {
            user: {
                type: Object,
                required: true
            },
            rounded: {
                type: String,
                default: 'lg'
            },
            width: {
                type: Number,
                default: 100
            }
        },

        computed: {
            avatar: function() {
                return this.user.avatar || 'bauble';
            }
        },
    };
</script>
