import { defineStore } from 'pinia'

export default defineStore(
    'search',
    {
        state: () => ({
            cursor: '',
            params: {},
            default: {
                format: '',
                hero: '',
                label: '',
                order: 'newest',
            }
        }),

        actions: {
            reset() {
                this.params = this.default;
            }
        }
    }
);
