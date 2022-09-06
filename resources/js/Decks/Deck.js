import Cards from "../DeckBuilder/Cards";
import Card from "../CardDatabase/Card";
import Model from "../Utilities/Model";

export default class Deck extends Model {
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

    get cardBackImage() {
        return this.fields.cardBackImage;
    }

    get authorName() {
        if (this.fields.player) {
            return this.fields.player;
        }

        if (this.fields.user && this.fields.user.name) {
            return this.fields.user.name;
        }

        return 'Anonymous';
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

    get videoUrl() {
        return this.fields.videoUrl;
    }

    get cards() {
        return new Cards(this.fields.cards);
    }

    get hero() {
        return this.fields.hero ? new Card(this.fields.hero) : null;
    }

    get sideboard() {
        return new Cards(this.fields.sideboard);
    }

    get weapons() {
        if (this.fields.weapons) return new Cards(this.fields.weapons);

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

    get totalSideboard() {
        return this.fields.sideboardTotal || 0;
    }

    get totalMainDeck() {
        return this.totalCards - this.totalSideboard;
    }

    get slug() {
        return this.fields.slug;
    }

    get updatedAt() {
        return moment(this.fields.updatedAt).utc().local().fromNow();
    }
}
