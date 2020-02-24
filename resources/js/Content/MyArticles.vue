<template>
    <div>
        <header-title title="My articles"></header-title>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto p-4 bg-white">
                <table class="w-full table-auto border-collapse bg-white" v-if="articles">
                    <thead>
                        <tr class="hidden sm:table-row">
                            <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left">ID</th>
                            <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left">Title</th>
                            <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Status</th>
                            <th class="border border-gray-300 py-2 px-4 font-serif uppercase">Actions</th>
                        </tr>

                        <tr class="table-row sm:hidden">
                            <th class="border border-gray-300 py-2 px-4 font-serif uppercase text-left" colspan="5">Card details</th>
                        </tr>
                    </thead>
                </table>

                <div v-else>
                    You have not yet written any articles. <router-link to="/articles/write" class="link">Write an article</router-link>.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTitle from '../Components/HeaderTitle.vue';

    export default {
        components: { HeaderTitle },

        data() {
            return {
                articles: null,
            };
        }
    };
</script>