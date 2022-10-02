import Cards from "./Cards.js";

export default {
    computed: {
        cards() {
            return (new Cards(this.collection)).sort();
        },

        loadout() {
            return this.cards.weapons().concat(this.cards.equipment());
        },

        availableSections() {
            switch (this.grouping) {
                case 'default':
                    return this.view === 'gallery' ? [
                        {title: 'Loadout', cards: this.loadout},
                        {title: 'Other', cards: this.other},
                    ] : [
                        {title: 'Deck', cards: this.cards.other()},
                        {title: 'Hero', cards: new Cards([this.cards.hero()])},
                        {title: 'Weapons', cards: this.cards.weapons()},
                        {title: 'Equipment', cards: this.cards.equipment()},
                    ];
                case 'cost':
                    var cards = this.cards.group(card => card.stats.cost);

                    return cards.cards.map(group => ({
                        title: group[0].stats.cost === undefined ? 'No cost' : 'Cost ' + group[0].stats.cost,
                        cards: new Cards(group)
                    }));
                case 'pitch':
                    var cards = this.cards.group(card => card.stats.resource);

                    return cards.cards.map(group => ({
                        title: group[0].stats.resource === undefined ? 'No pitch' : 'Pitch ' + group[0].stats.resource,
                        cards: new Cards(group)
                    }));
                case 'type':
                    return [
                        {title: 'Hero', cards: new Cards([this.cards.hero()])},
                        {title: 'Weapons', cards: this.cards.weapons()},
                        {title: 'Equipment', cards: this.cards.equipment()},
                        {title: 'Attack actions', cards: this.cards.attackActions()},
                        {title: 'Attack reactions', cards: this.cards.attackReactions()},
                        {title: 'Defense reactions', cards: this.cards.defenseReactions()},
                        {title: 'Non-attack actions', cards: this.cards.nonAttackActions()},
                        {title: 'Instants', cards: this.cards.instants()},
                        {title: 'Items', cards: this.cards.items()},
                        {title: 'Miscellaneous', cards: this.cards.miscellaneous()},
                    ];
            }
        }
    }
}
