<template>
    <div>
        <header-title title="API Documentation"></header-title>
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto px-4 py-8 flex">
                <div class="w-1/4">
                    <ul>
                        <li class="mb-2"><h2 class="text-xl font-serif uppercase">Getting started</h2></li>
                        <li class="p-2 px-4 bg-white mb-1">Requests</li>
                        <li class="p-2 px-4 bg-white mb-1">Formats</li>
                        <li class="p-2 px-4 bg-white mb-1">Throttling</li>
                        <li class="mt-4 mb-2"><h2 class="text-xl font-serif uppercase">Endpoints</h2></li>
                        <li class="p-2 px-4 bg-white mb-1">Cards</li>
                        <li class="p-2 px-4 bg-white mb-1">Decks</li>
                    </ul>
                </div>
                <div class="w-3/4 sm:pl-4">
                    <div class="bg-white p-4">
                        <h2 class="font-serif uppercase text-2xl">Getting started</h2>
                        <p class="my-4">
                            The FaB DB API provides a public interface for access to card and deck information entered into
                            the system. This makes it possible for 3rd parties to create amazing applications utilising our rich
                            APIs and data endpoints.
                        </p>
                        <p class="my-4">
                            Getting stated with consuming the FaB DB API is simple - simply utilise your favourite library
                            to make various requests to the various <a href="#endpoints" class="link">endpoints</a> we
                            have documented.
                        </p>
                        <a name="requests"></a>
                        <h3 class="font-serif uppercase text-xl">Requests</h3>
                        <p class="my-4">
                            All requests made to the API must be made securely (https) to: {{ domain }}.
                        </p>
                        <p class="my-4">
                            No authentication is required.
                        </p>
                        <h3 class="font-serif uppercase text-xl">Formats</h3>
                        <p class="my-4">
                            The FaB DB API supports multiple formats for output from the API, depending on your use case.
                            The default response is JSON, with both XML and CSV available when you set the accepted content
                            type as part of your requests headers, eg:
                        </p>
                        <p class="my-4 font-mono bg-gray-300 p-4">
                            Accept: application/json<br>
                            Accept: application/xml<br>
                            Accept: text/csv
                        </p>
                        <h2 class="font-serif uppercase text-2xl mt-8">Endpoints</h2>
                        <p class="my-4">
                            The FaB DB API supports a number of endpoints to help with your research, or write your own
                            application. Currently, those endpoints are centered around cards and decks that have been published
                            for the public to read and use themselves.
                        </p>
                        <h3 class="font-serif uppercase text-xl">Cards</h3>
                        <p class="my-4">
                            The card database at FaB DB forms the backbone of all the other features, and so it makes
                            sense that it would also provide a powerful API to utilise that dataset.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from "../Components/Breadcrumbs";
    import HeaderTitle from "../Components/HeaderTitle";

    export default {
        components: { Breadcrumbs, HeaderTitle },

        computed: {
            domain() {
                return window.settings.apiDomain;
            }
        },

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: { name: 'home' } },
                    { text: 'API Documentation' }
                ]
            };
        }
    };
</script>
