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

        dragImage($event, from, index, src) {
            const image = new Image();
            image.setAttribute('src', src);
            image.setAttribute('width', '200px');

            $event.dataTransfer.setDragImage(image, 0, 0);

            this.drag($event, from, index);
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
