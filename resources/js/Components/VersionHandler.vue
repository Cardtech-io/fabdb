<template>
    <modal name="version-refresh" :adaptive="true" :diablog="true" height="auto" classes="bg-gray-100">
        <div class="m-8 text-center flex items-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-10 w-10 text-red-700">
                    <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z"/>
                </svg>
            </div>
            <div class="flex-auto">
                FaB DB has been updated. Please refresh your browser.
            </div>
        </div>
    </modal>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                version: window.version
            };
        },

        mounted() {
            axios.interceptors.response.use(
                response => {
                    if (response.headers['x-version'] && response.headers['x-version'] != this.version) {
                        this.$modal.show('version-refresh');
                    }

                    return response;
                },
                error => { return Promise.reject(error); });
        }
    };
</script>
