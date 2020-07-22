<template>
    <button class="text-gray-400 hover:text-gray-800" :class="{ 'mt-2': direction == 'down' }" @click="vote()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current" :class="classes">
            <path d="M11 0h1v3l3 7v8a2 2 0 01-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 012-2h7V2a2 2 0 012-2zm6 10h3v10h-3V10z" v-if="direction == 'up'"/>
            <path d="M11 20a2 2 0 01-2-2v-6H2a2 2 0 01-2-2V8l2.3-6.12A3.11 3.11 0 015 0h8a2 2 0 012 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" v-else/>
        </svg>
    </button>
</template>

<script>
    import axios from 'axios';

    export default {
        props: {
            direction: {
                type: String,
                required: true,
                validator: function (value) {
                    return ['up', 'down'].indexOf(value) !== -1;
                }
            },
            size: {
                type: Number,
                required: true
            },
            voteable: {
                type: String,
                required: true
            },
            foreign: {
                type: String,
                required: true
            }
        },

        computed: {
            classes() {
                let classes = ['h-' + this.size];

                return classes;
            }
        },

        methods: {
            vote() {
                let payload = {
                    type: this.voteable,
                    foreign: this.foreign,
                    direction: this.direction
                };

                axios.post('/vote', payload);
            }
        }
    };
</script>