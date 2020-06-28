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

    get excerpt() {
        return this.fields.excerpt;
    }

    get image() {
        return this.fields.image;
    }

    get slug() {
        return this.fields.slug;
    }

    get title() {
        return this.fields.title;
    }

    get link() {
        return '/articles/' + Strings.methods.kebabCase(this.title) + '/' + this.slug;
    }
}

export default Article;
