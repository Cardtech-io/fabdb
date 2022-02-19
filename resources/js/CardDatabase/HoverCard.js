export default {
    bind(element, binding, vnode) {
        if (!binding.value) {
            throw 'No card provided for hover-card binding.';
        }

        element.card = binding.value;

        element.mouseenter = () => {
            vnode.context.$eventHub.$emit('hover-card', element.card);
        };

        element.mouseleave = () => {
            vnode.context.$eventHub.$emit('hover-card');
        };

        element.addEventListener('mouseenter', element.mouseenter);
        element.addEventListener('mouseleave', element.mouseleave);
    },

    componentUpdated(element, binding, vnode) {
        element.card = binding.value;
    },

    unbind(element) {
        element.removeEventListener('mouseenter', element.mouseenter);
        element.removeEventListener('mouseleave', element.mouseleave);
    }
};
