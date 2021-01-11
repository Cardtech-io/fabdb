<template>
    <div>
        <header-title :title="user.name"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="sm:mx-auto p-4 flex">
                <div class="flex-1">
                    <ul class="block border-b border-gray-400 font-serif uppercase clearfix">
                        <li class="float-left mr-1 sm:mr-4"><a href="" class="inline-block p-2 sm:px-4 pt-2 pb-1 border border-b-0 border-gray-400 rounded-t-lg" :class="tab === 'decks' ? 'relative -bottom-1px bg-gray-200': 'bg-gray-300 hover:bg-gray-100'" @click.prevent="tab = 'decks'">Decks</a></li>
                        <li class="float-left mr-1 sm:mr-4"><a href="" class="inline-block p-2 sm:px-4 pt-2 pb-1 border border-b-0 border-gray-400 rounded-t-lg" :class="tab === 'wants' ? 'relative -bottom-1px bg-gray-200': 'bg-gray-300 hover:bg-gray-100'" @click.prevent="tab = 'wants'">Want list</a></li>
                        <li class="float-left mr-1 sm:mr-4"><a href="" class="inline-block p-2 sm:px-4 pt-2 pb-1 border border-b-0 border-gray-400 rounded-t-lg" :class="tab === 'trades' ? 'relative -bottom-1px bg-gray-200': 'bg-gray-300 hover:bg-gray-100'" @click.prevent="tab = 'trades'">Trade list</a></li>
                    </ul>
                </div>
                <div class="flex-0">
                    <div class="rounded-xl overflow-hidden">
                        <avatar :user="user" :width="200"></avatar>
                    </div>
                </div>
            </div>
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

    export default {
        components: {
            Avatar,
            Breadcrumbs,
            HeaderTitle,
        },

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
