export default {
    hydrateMany(records, klass) {
        return records.map(record => {
            return this.hydrate(record, klass);
        });
    },

    hydrate(record, klass) {
        return new klass(record);
    },

    hydratePaginated(data, klass) {
        data.data = this.hydrateMany(data.data, klass);

        return data;
    }
};
