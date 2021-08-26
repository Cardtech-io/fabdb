export default {
    history: [],

    write(action, message) {
        this.history.push({action, message});
    }
};
