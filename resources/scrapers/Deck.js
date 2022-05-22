class Deck {
    constructor(decklist, date, dom) {
        this.decklist = decklist;
        this.date = date;
        this.dom = dom;
    }

    details() {
        let baseData = this.dom.window.document.querySelector('body > article > div > table > tbody');

        return {
            decklist: this.decklist,
            player: baseData.querySelector('tr:nth-child(1) > td').textContent,
            date: this.date,
            event: baseData.querySelector('tr:nth-child(3) > td').textContent,
            format: baseData.querySelector('tr:nth-child(4) > td').textContent,
            hero: baseData.querySelector('tr:nth-child(5) > td').textContent,
            result: baseData.querySelector('tr:nth-child(6) > td').textContent
        };
    }

    cards() {
        let cards = [];
        let tables = Array.from(this.dom.window.document.querySelectorAll('.mb-4 > table'));

        for (let i in tables) {
            let rows = Array.from(tables[i].querySelectorAll('tbody > tr'));

            // get rid of the header
            rows.shift();

            for (let j in rows) {
                let entry = rows[j].querySelector('td').textContent.split(' x ');

                cards.push({
                    total: entry[0],
                    card: this.identifier(entry[1])
                });
            }
        }

        return cards;
    }

    identifier(name) {
        let matches = name.match(/([a-z'\s]+)(\(([0-9]+)\))?/i);
        let identifier = matches[1].toLowerCase().trim().replace(/'/g, '').replace(/\s+/g, '-');

        if (matches[3] !== undefined) {
            let colours = {'1': 'red', '2': 'yellow', '3': 'blue'};

            identifier += '-'+colours[matches[3]];
        }

        return identifier;
    }

    toJson() {
        return {
            details: this.details(),
            cards: this.cards()
        }
    }
};

module.exports = Deck;