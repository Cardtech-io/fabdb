<template>
    <div>
        <comment-count :comments="comments"></comment-count>

        <div v-if="comments.length">
            <comment v-for="comment in comments" :key="comment.slug" :comment="comment"></comment>
        </div>

        <respond :type="type" :foreign="id" @comment-posted="addComment" class="mt-8"></respond>
    </div>
</template>

<script>
    import axios from 'axios';

    import CommentCount from "./CommentCount.vue";
    import CommentModel from './Comment.js';
    import Comment from "./Comment.vue";
    import Models from "../Utilities/Models.js";
    import Respond from "./Respond.vue";

    export default {
        props: {
            type: {
                type: String,
                required: true
            },

            id: {
                type: String,
                required: true
            }
        },

        components: {Comment, CommentCount, Respond},

        data() {
            return {
                comments: []
            }
        },

        methods: {
            addComment(comment) {
                this.comments.push(new CommentModel(comment));
            }
        },

        mounted() {
            axios.get('/comments/' + this.type + '/' + this.id).then(response => {
                this.comments = Models.hydrateMany(response.data, CommentModel);
            });
        }
    }
</script>
