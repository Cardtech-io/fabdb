<template>
    <div v-if="messages && messages.length" class="fixed bottom-0 md:right-0 md:mb-64 w-full md:w-1/2 z-1000 overflow-visible p-4">
        <div v-for="(message, i) in messages" :key="'key-' + i" class="p-2 mb-4 rounded-lg text-white cursor-pointer" :class="backgroundClass(message.status)" @click="acknowledge(i)">
            {{ message.message }} <span v-if="message.total > 1">({{ message.total }})</span>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState('messages', ['messages'])
        },

        methods: {
            ...mapActions('messages', ['acknowledge']),

            backgroundClass: function(status) {
                const colours = {
                    error: 'bg-red-700',
                    info: 'bg-blue-700',
                    success: 'bg-green-700'
                };
                
                return colours[status];
            }
        }
    };
</script>
