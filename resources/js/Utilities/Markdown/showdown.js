import showdown from 'showdown';
import Classes from './Classes';
import Blockquote from "./Blockquote";
import Cards from "./Cards";
import Decks from "./Decks";

let converter = new showdown.Converter({extensions: [Cards, Decks, ...Classes, Blockquote]});

export default function(string) {
    return '<div>'+converter.makeHtml(string)+'</div>';
};
