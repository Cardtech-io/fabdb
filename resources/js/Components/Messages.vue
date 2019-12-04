<template>
    <div v-if="messages" class="fixed bottom w-full z-10">
        <!--<ol>-->
            <!--<li v-for="(message, i) in messages" :key="'key-' + i" class="p-4" :class="backgroundClass(message.status)" @click="acknowledge(i)">-->
                <!--{{ message.message }}-->
            <!--</li>-->
        <!--</ol>-->
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        data() {
            return {

            }
        },

        computed: {
            ...mapState('messages', ['messages'])
        },

        methods: {
            ...mapActions('messages', ['acknowledge']),

            backgroundClass: function(status) {
                const colours = {
                    error: 'bg-red-800'
                };

                return colours[status];
            }
        }
    };
</script>
