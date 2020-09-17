import moment from 'moment';
import Strings from '../Utilities/Strings';

class Article
{
    constructor(fields) {
        this.fields = fields;
    }

    get author() {
        return this.fields.author;
    }

    get content() {
        return this.fields.content;
    }

    get published() {
        return moment.utc(this.fields.publishAt).format('Do MMMM YYYY');
    }

    get publishedRelative() {
        return moment.utc(this.fields.publishAt).fromNow();
    }

    get excerpt() {
        return this.fields.excerpt;
    }

    get image() {
        return this.fields.image;
    }

    get slug() {
        return this.fields.slug;
    }

    get tags() {
        return this.fields.tags;
    }

    get title() {
        return this.fields.title;
    }

    get link() {
        return '/articles/' + Strings.methods.kebabCase(this.title) + '/' + this.slug;
    }

    valid() {
        return !!this.fields;
    }
}

export default Article;
