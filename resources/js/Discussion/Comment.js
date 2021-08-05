import moment from "moment";

class Comment
{
    constructor(fields) {
        this.fields = fields;
    }

    get author() {
        return this.fields.user;
    }

    get name() {
        return this.fields.user.name || 'Anonymous';
    }

    get slug() {
        return this.fields.slug;
    }

    get when() {
        return moment.utc(this.fields.createdAt).local().fromNow();
    }

    get content() {
        return this.fields.content;
    }

    get subscription() {
        return this.fields.user.subscription;
    }

    get myVote() {
        return this.fields.myVote || 0;
    }

    get totalVotes() {
        return this.fields.totalVotes || 0;
    }
}

export default Comment;
