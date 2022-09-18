import CardPreview from "./CardPreview.vue";

export default {
    bind(element, binding, vnode) {
        if (!binding.value) {
            throw 'No value provided for preview-card binding.';
        }

        if (!(Array.isArray(binding.value.stack) && !isNaN(binding.value.index))) {
            throw 'Both stack and index properties must be provided for preview-card as part of a JSON object.';
        }

        element.value = binding.value;

        let touchMoved = false;

        let mouseHandler = () => {
            vnode.context.$modal.show(
                CardPreview,
                element.value,
                {
                    adaptive: true,
                    height: 'auto',
                    scrollable: true,
                }
            )
        };

        let touchHandler = (e) => {
            if (touchMoved) return;

            vnode.context.$modal.show(
                CardPreview,
                element.value,
                {
                    adaptive: true,
                    height: 'auto',
                    scrollable: true,
                }
            )

            touchMoved = false;
        };

        element.onmouseup = mouseHandler;
        element.ontouchend = touchHandler;
        element.ontouchstart = (e) => { touchMoved = false; };
        element.ontouchmove = () => { touchMoved = true; }
    },

    componentUpdated(element, binding, vnode) {
        element.value = binding.value;
    }
};
