import Models from "../Utilities/Models";
import Deck from "./Deck";

export default {
    find(slug) {
        return axios.get('/decks/'+slug).then(response => Models.hydrate(response.data, Deck));
    }
};
