<template>
    <div class="flex items-center justify-center">
        <a href="" class="link-alternate flex-0" @click.prevent="handler(field)">{{ text }}</a>
        <icon :size="5" v-if="order == field && direction == 'asc'" class="flex-0">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </icon>
        <icon :size="5" v-if="order == field && direction == 'desc'">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </icon>
    </div>
</template>

<script>
    import Icon from "./Icon";

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
            handler(value) {
                this.clicked(value);
            }
        }
    };
</script>

