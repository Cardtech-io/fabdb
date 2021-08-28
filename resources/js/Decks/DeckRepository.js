import Models from "../Utilities/Models";
import Deck from "./Deck";

export default {
    find(slug) {
        return axios.get('/decks/'+slug).then(response => Models.hydrate(response.data, Deck));
    },

    // Returns the deck with cards set to the required width
    findWithWidth(slug, width) {
        return axios.get('/decks/'+slug+'?width='+width).then(response => Models.hydrate(response.data, Deck));
    }
};
