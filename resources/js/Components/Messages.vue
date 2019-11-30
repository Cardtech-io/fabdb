<template>
    <div v-if="visible" class="absolute bottom w-full z-10" @message="displayMessage">
        {{ messages }}
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {
                visible: true
            }
        },

        computed: {
            ...mapState('messages', ['messages'])
        },

        methods: {
            displayMessage: function(event) {
                console.log(event);

            }
        }
    };
</script>
