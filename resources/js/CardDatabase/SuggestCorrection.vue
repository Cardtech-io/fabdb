<template>
    <div class="space-y-4 m-4">
        <div>
            <label class="block font-serif uppercase tracking-wide mb-1">Name</label>
            <input type="text" v-model="card.name" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg flex-auto">
        </div>

        <div>
            <label class="block font-serif uppercase tracking-wide mb-1">Text</label>
            <textarea v-model="card.text" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg flex-auto"></textarea>
        </div>

        <div>
            <label class="block font-serif uppercase tracking-wide mb-1">Keywords</label>
            <input type="text" v-model="card.keywords" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg flex-auto">
        </div>

        <div class="pt-4">
            <button class="block w-full sm:w-auto mx-auto button-primary rounded px-4 py-3" @click="submit">Submit correction</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import axios from 'axios';
    import Submit from "../Components/Form/Submit";

    export default {
        components: {
            Submit
        },

        props: {
            card: {
                required: true
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            submit() {
                axios.post('corrections', {card: this.card});
                
                this.$modal.hide('suggestion');
                this.addMessage({status: 'success', message: 'Thank you!'});
            }
        }
    };
</script>
