import Historian from "./Historian.vue";
import Strings from "../Utilities/Strings.js";

export default {
    mixins: [Strings],

    methods: {
        drag($event, from, index) {
            const card = this.$parent[from][index];

            const image = new Image();
            image.src = card.image;

            $event.dataTransfer.dropEffect = 'move'
            $event.dataTransfer.effectAllowed = 'move'
            $event.dataTransfer.setData('from', from);
            $event.dataTransfer.setData('index', index);
            $event.dataTransfer.setDragImage(image, 100, 139);
        },

        drop($event, to) {
            const from = $event.dataTransfer.getData('from');
            let index = $event.dataTransfer.getData('index');

            if (index === undefined) {
                index = this.$parent[from].length-1;
            }

            this.send(index, from, to);
        },

        send(index, from, to) {
            let card = this.$parent[from].splice(index, 1)[0];

            this.$parent[to].push(card);

            let message = '';

            switch (to) {
                case 'pitch':
                    message = this.ucfirst(to)+'ed "'+card.name+'".';
                    break;
                case 'banished':
                    message = 'Banished "'+card.name+'".';
                    break;
                case 'hand':
                    message = 'Moved "'+card.name+'" back to hand.';
                    break;
                case 'arsenal':
                case 'graveyard':
                    message = 'Moved "'+card.name+'" to '+to+'.';
                    break;
            }

            Historian.write('move-card', message);
        }
    }
};
