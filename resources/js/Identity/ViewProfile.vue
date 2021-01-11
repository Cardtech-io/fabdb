<template>
    <div class="container p-4 py-8 sm:mx-auto text-white flex">
        <div class="pb-8 flex-1 w-2/3">
            <div class="flex navigation pb-8">
                <avatar :user="user" :width="100" class="mr-4"></avatar>
                <div>
                    <h1 class="font-serif text-4xl uppercase mb-2">{{ user.name }}</h1>
                    <div class="text-base">
                        <button class="bg-black py-2 px-3 text-gray-300 rounded-lg mr-2 hover:bg-gray-800">Decks</button>
                        <button class="bg-black py-2 px-3 text-gray-300 rounded-lg mr-2 hover:bg-gray-800">Want list</button>
                        <button class="bg-black py-2 px-3 text-gray-300 rounded-lg mr-2 hover:bg-gray-800">Trade list</button>
                    </div>
                </div>
            </div>

            lkajsdflkjasdf
        </div>
        <div class="rounded-xl bg-black p-4 w-1/3">
            lkjasdlkjasdfljkasdflj
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from "../Components/Breadcrumbs";
    import HeaderTitle from "../Components/HeaderTitle";
    import LazyLoader from "../Components/LazyLoader";
    import axios from "axios";
    import Models from "../Utilities/Models";
    import User from "./User";
    import Avatar from "./Avatar";
    import Imagery from "../Utilities/Imagery";

    export default {
        components: {
            Avatar,
            Breadcrumbs,
            HeaderTitle,
        },

        mixins: [Imagery],

        data() {
            return {
                user: null,
                title: '',
                tab: 'decks',
            }
        },

        computed: {
            crumbs() {
                return [
                    {text: 'Home', link: '/'},
                    {text: 'View profile: '+this.user.name}
                ];
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/users/'+to.params.user).then(response => {
                callback(function() {
                    this.user = Models.hydrate(response.data, User);
                })
            });
        })
    }
</script>
