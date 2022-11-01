<template>
    <div class="flex items-center">
        <a href="" class="link-alternate flex-0" @click.prevent="handler">{{ text }}</a>
        <icon :size="5" v-if="order === field && direction === 'desc'" class="flex-0">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </icon>
        <icon :size="5" v-if="order === field && direction === 'asc'" class="flex-0">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"/>
        </icon>
    </div>
</template>

<script>
    import Icon from "./Icon.vue";

    export default {
        props: {
            field: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            clicked: {
                required: true
            },
            order: {
                type: String,
                required: true,
            },
            direction: {
                type: String,
                required: true,
            }
        },

        components: {Icon},

        methods: {
            handler(event, value) {
                this.clicked(this.field);
            }
        }
    };
</script>

