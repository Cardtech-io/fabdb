import CardPreview from "./CardPreview";

export default {
    bind(element, binding, vnode) {
        if (!binding.value) {
            throw 'No value provided for preview-card binding.';
        }

        if (!(Array.isArray(binding.value.stack) && !isNaN(binding.value.index))) {
            throw 'Both stack and index properties must be provided for preview-card as part of a JSON object.';
        }

        element.value = binding.value;

        element.onmouseup = () => {
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
    },

    componentUpdated(element, binding, vnode) {
        element.value = binding.value;
    }
};
