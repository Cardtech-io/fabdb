import Historian from "./Historian";
import Strings from "../Utilities/Strings";

export default {
    mixins: [Strings],

    methods: {
        drag($event, from, index) {
            $event.dataTransfer.dropEffect = 'move'
            $event.dataTransfer.effectAllowed = 'move'
            $event.dataTransfer.setData('from', from);
            $event.dataTransfer.setData('index', index);
        },

        drop($event, to) {
            const from = $event.dataTransfer.getData('from');
            const index = $event.dataTransfer.getData('index');
            const card = index === null ? this.$parent[from].pop() : this.$parent[from].splice(index, 1)[0];

            this.$parent[to].push(card);

            let message = '';

            switch (to) {
                case 'pitch':
                case 'discard':
                    message = this.ucfirst(to)+'ed "'+card.name+'".';
                    break;
                case 'banished':
                    message = 'Banished "'+card.name+'".';
                    break;
                case 'hand':
                    message = 'Moved "'+card.name+'" back to hand.';
                    break;
                case 'arsenal':
                    message = 'Moved "'+card.name+'" to arsenal.';
                    break;
            }

            Historian.write('move-card', message);
        }
    }
};
