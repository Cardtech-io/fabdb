const fetch = require('isomorphic-fetch'),
    fs = require('fs'),
    jsdom = require("jsdom"),
    { JSDOM } = jsdom;

const Deck = require('./Deck.js');

const site = 'https://fabtcg.com';
const baseUrl = site+'/decklists/';
let lastPage = false;
let decks = [];
let total = 0;

function request(url) {
    return fetch(url).then(response => {
        return response.text();
    });
}

async function scrape(page) {
    try {
        request(baseUrl + '?page=' + page).then(body => {
            let dom = new JSDOM(body);

            // set the last page of requests
            if (!lastPage) {
                lastPage = dom.window.document.querySelector('.pagination-arrow-next > li > a')
                    .getAttribute('href')
                    .split('=')[1];
            }

            dom.window.document.querySelectorAll("article > div > div.block-table > table > tbody > tr").forEach(row => {
                let country = row.cells[0].textContent;

                if (country === 'Country') return;

                let link = row.cells[2].querySelector('a');
                let deckUrl = link.href;
                let date = row.cells[1].textContent;
                let decklist = row.cells[2].textContent;

                request(deckUrl).then(response => {
                    let deck = new Deck(decklist, date, new JSDOM(response));
                    console.log(JSON.stringify(deck.toJson()));
                    total++;
                });
            });

            if (page < lastPage) {
                return scrape(page + 1);
            }
        });
    }
    catch (error) {
        console.log('There was a problem trying to read or write the deck: ' + error.message);
    }
 }

 scrape(1);
