<template>
    <div class="p-4 px-8 h-full">
        <header>
            <h1 class="font-serif uppercase text-4xl text-center text-gray-200">Important!</h1>
        </header>

        <div class="text-gray-500">
            <p class="my-4">
                FaB DB is making a major change that may affect your saved collection.
                However, we want to ensure that our change is as friendly to your collection as possible.
            </p>

            <p class="my-4">
                In order to navigate this issue, we must ask you to specify whether your collection
                is predominantly alpha/first editions, or unlimited edition.
            </p>

            <div class="mx-auto pb-8 text-center">
                <div v-if="!clarification">
                    <p class="mb-8 text-gray-200">My collection on FaB DB is predominantly...</p>
                    <button class="button-primary py-2 px-4 rounded" @click="clarification = 'first'">Alpha/First</button>
                    <button class="button-primary py-2 px-4 rounded" @click="clarification = 'unlimited'">Unlimited</button>
                </div>
                <div v-else>
                    <p>You have selected:</p>
                    <p class="my-4 font-serif uppercase text-2xl text-white">{{ clarifications[clarification] }} Edition</p>
                    <p class="my-4">Is this correct?</p>
                    <button class="button-secondary py-2 px-4 rounded" @click="clarification = ''">Oops! Go back!</button>
                    <button class="button-primary py-2 px-4 rounded" @click="save()">Yes, save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                clarification: '',
                clarifications: {
                    first: 'Alpha/First',
                    unlimited: 'Unlimited'
                }
            }
        },

        methods: {
            save() {
                axios.post('/collection/clarify', {clarification: this.clarification}).then(() => {
                    this.$modal.hide('collection-clarification');
                });
            }
        }
    }
</script>
