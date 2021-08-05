import Cards from "../DeckBuilder/Cards";
import Card from "../CardDatabase/Card";
import Model from "../Utilities/Model";

class Deck extends Model {
    get avatar() {
        return this.fields.avatar;
    }

    get name() {
        return this.fields.name;
    }

    get parent() {
        if (this.fields.parent) {
            return new Deck(this.fields.parent);
        }
    }

    get authorName() {
        return this.fields.user.name || 'Anonymous';
    }

    get user() {
        return this.fields.user;
    }

    get label() {
        return this.fields.label || '';
    }

    get notes() {
        return this.fields.notes;
    }

    get cards() {
        return new Cards(this.fields.cards);
    }

    get hero() {
        return this.cards.hero();
    }

    get sideboard() {
        return new Cards(this.fields.sideboard);

        if (this.cards.hero()) {
            return new Card(this.cards.hero());
        }
    }

    get weapons() {
        return this.cards.weapons();
    }

    get equipment() {
        return this.cards.equipment();
    }

    get other() {
        return this.cards.other();
    }

    get format() {
        return this.fields.format;
    }

    get totalCards() {
        return this.fields.totalCards || 0;
    }

    get slug() {
        return this.fields.slug;
    }

    get updatedAt() {
        return moment(this.fields.updatedAt).utc().local().fromNow();
    }
}

export default Deck;
