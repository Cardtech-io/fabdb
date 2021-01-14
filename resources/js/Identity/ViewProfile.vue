<template>
    <div class="container p-4 py-8 sm:mx-auto text-white">
        <div class="flex navigation pb-8 mb-8">
            <div class="flex-0">
                <avatar :user="user" :width="100" class="mr-4"></avatar>
            </div>
            <div>
                <h1 class="font-serif text-4xl uppercase mb-2">{{ user.name }}</h1>
                <div class="text-base">
                    <profile-nav-item :to="{ name: 'user.profile.decks', params: { user: this.$route.params.user }}">Decks</profile-nav-item>
                    <profile-nav-item :to="{ name: 'user.profile.wants', params: { user: this.$route.params.user }}">Want list</profile-nav-item>
                    <profile-nav-item :to="{ name: 'user.profile.trades', params: { user: this.$route.params.user }}">Trade list</profile-nav-item>
                </div>
            </div>
        </div>

        <router-view :user="user"></router-view>
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
    import ProfileNavItem from "./ProfileNavItem";

    export default {
        components: {
            Avatar,
            Breadcrumbs,
            HeaderTitle,
            ProfileNavItem,
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
                });
            })
        })
    }
</script>
