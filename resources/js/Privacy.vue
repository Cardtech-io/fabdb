<template>
    <div>
        <header-title title="Privacy policy"></header-title>

        <div class="crumbs text-white font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <div class="flex-1">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
            </div>
        </div>

        <div class="main-body">
            <div class="container sm:mx-auto py-8 px-4">
                <h2 class="text-4xl font-serif mb-4 uppercase sm:hidden">Privacy Policy</h2>
                <p class="my-4">
                    Your privacy is important to us. And we actually mean that. It is FaB DB's policy to respect your
                    privacy regarding any information we may collect from you across our website, https://fabdb.net,
                    and other sites we own and operate.
                </p>

                <p class="my-4">
                    We only ask for personal information when we truly need it to provide a service to you. We collect
                    it by fair and lawful means, with your knowledge and consent. We also let you know why we’re
                    collecting it and how it will be used, when that information is required. We won't even ask you for
                    your name unless absolutely necessary.
                </p>

                <p class="my-4">
                    We only retain collected information for as long as necessary to provide you with your requested
                    service. What data we do store, we protect within commercially acceptable means to prevent loss and
                    theft, as well as unauthorised access, disclosure, copying, use or modification. In fact, this is
                    why we ask so little of you in regards to your information - the less we know, then the less there
                    is to be stolen or misused.
                </p>

                <p class="my-4">
                    We don’t share any personally identifying information publicly or with third-parties, except when
                    required to by law.
                </p>

                <p class="my-4">
                    Our website may link to external sites that are not operated by us. Please be aware that we have no
                    control over the content and practices of these sites, and cannot accept responsibility or liability
                    for their respective privacy policies.
                </p>

                <p class="my-4">
                    You are free to refuse our request for your personal information, with the understanding that we may
                    be unable to provide you with some of your desired services. For example, without your name, you
                    are not able to use any of our social features.
                </p>

                <p class="my-4">
                    Your continued use of our website will be regarded as acceptance of our practices around privacy and
                    personal information. If you have any questions about how we handle user data and personal
                    information, please feel free to contact us.
                </p>

                <p class="my-4">
                    This policy is effective as of 22 January 2020.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Crumbs from './Components/Crumbs.vue';
    import HeaderTitle from './Components/HeaderTitle.vue';

    export default {
        components: { Crumbs, HeaderTitle },

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Privacy policy' }
                ]
            }
        }
    };
</script>
