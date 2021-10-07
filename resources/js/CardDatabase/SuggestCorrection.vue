<template>
    <form class="block space-y-4 m-4" @submit.prevent="submit">
        <div>
            <label class="block font-serif uppercase tracking-wide mb-1">Name</label>
            <input type="text" v-model="name" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg flex-auto" required>
        </div>

        <div>
            <label class="block font-serif uppercase tracking-wide mb-1">Text</label>
            <textarea v-model="text" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg flex-auto" rows="3" required></textarea>
        </div>

        <div>
            <label class="block font-serif uppercase tracking-wide mb-1">Comment</label>
            <textarea v-model="comment" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg flex-auto" rows="3" placeholder="Please provide some details as to why you recommend this correction be made." required></textarea>
        </div>

        <div>
            <label class="flex mb-1 text-sm sm:text-base">
                <input type="checkbox" class="form-checkbox mt-1 rounded-lg text-green-500 w-6 h-6" required>
                <div class="ml-4">
                    I acknowledge that Legend Story Studios may use this correction in whole or
                    in part to improve the quality and/or accuracy of the translations of the Flesh
                    and Blood Trading Card game. In submitting this comment I acknowledge that
                    in relation to my submission;

                    <ol class="list-roman mt-4">
                        <li>
                            Legend Story Studios retains copyright and all other intellectual property
                            rights in all language variations of the Flesh and Blood Trading Card game and
                            related products
                        </li>
                        <li>
                            I have no claim to copyright or other intellectual property
                            rights in relation to my comment and any resulting translation;</li>
                        <li>
                            I will not
                            receive any remuneration or other payment; and (iv) I have no attribution
                            rights.
                        </li>
                    </ol>
                </div>
            </label>
        </div>

        <div class="pt-4">
            <button class="block w-full sm:w-auto mx-auto button-primary rounded px-4 py-3">Submit correction</button>
        </div>
    </form>
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
            identifier: {
                required: true
            },

            printing: {
                required: true
            }
        },

        data() {
            return {
                name: this.printing.name,
                text: this.printing.text,
                comment: ''
            };
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            submit() {
                axios.post('cards/'+this.identifier+'/corrections', {
                    printing: this.printing.sku.sku,
                    name: this.name,
                    text: this.text,
                    comment: this.comment
                });

                this.$modal.hide('suggestion');
                this.addMessage({status: 'success', message: 'Thank you!'});
            }
        },

        mounted() {
            console.log(this.printing);
        }
    };
</script>
