import showdown from 'showdown';
import Classes from './Classes.js';
import Blockquote from "./Blockquote.js";
import Cards from "./Cards.js";
import Decks from "./Decks.js";

let converter = new showdown.Converter({extensions: [Cards, Decks, ...Classes, Blockquote]});

export default function(string) {
    return '<div>'+converter.makeHtml(string)+'</div>';
};
