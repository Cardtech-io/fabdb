import {storeToRefs} from "pinia/dist/pinia";
import useSearch from "../Store/Search";

export default {
    setup() {
        let store = useSearch();
        const  {cursor, params} = storeToRefs(store);
        return {cursor, params, store};
    },

    methods: {
        newSearch() {
            this.cursor = '';
            this.requestSearch();
        },

        requestSearch() {
            this.$emit('search-requested');
        }
    }
};
