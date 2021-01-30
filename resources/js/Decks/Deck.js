import Cards from "../DeckBuilder/Cards";
import Model from "../Utilities/Model";

class Deck extends Model {
    get avatar() {
        return this.fields.avatar;
    }

    get name() {
        return this.fields.name;
    }

    get cards() {
        return new Cards(this.fields.cards);
    }

    get hero() {
        return this.cards.hero();
    }

    get sideboard() {
        return new Cards(this.fields.sideboard);
    }

    get slug() {
        return this.fields.slug;
    }
}

export default Deck;
