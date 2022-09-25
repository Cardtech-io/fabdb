<template>
    <div>
        <header-title title="API Documentation"/>
        <breadcrumbs :crumbs="crumbs"/>

        <div class="main-body">
            <div class="container sm:mx-auto px-4 py-8 flex">
                <div class="w-1/4">
                    <ul class="mr-4">
                        <li class="mb-2"><h2 class="text-xl font-serif uppercase">Getting started</h2></li>
                        <li class="mb-1"><a href="#authentication" class="block p-2 px-4 button-secondary">Authentication</a></li>
                        <li class="mb-1"><a href="#requests" class="block p-2 px-4 button-secondary">Requests</a></li>
                        <li class="mb-1"><a href="#formats" class="block p-2 px-4 button-secondary">Formats</a></li>
                        <li class="mb-1"><a href="#throttling" class="block p-2 px-4 button-secondary">Throttling</a></li>
                        <li class="mt-4 mb-2"><h2 class="text-xl font-serif uppercase">Endpoints</h2></li>
                        <li class="mb-1"><a href="#cards" class="block p-2 px-4 button-secondary">Cards</a></li>
                        <li class="mb-1"><a href="#decks" class="block p-2 px-4 button-secondary">Decks</a></li>
                    </ul>
                </div>
                <div class="w-3/4">
                    <div class="bg-white dark:bg-gray-800 p-4">
                        <h2 class="font-serif uppercase text-2xl">Getting started</h2>
                        <p class="my-4">
                            The FaB DB API provides a public interface for access to card and deck information entered into
                            the system. This makes it possible for 3rd parties to create amazing applications utilising our rich
                            APIs and data endpoints. The API is completely free-to-use but has a single requirement and that is:
                            <span class="italic font-bold">the API cannot be used to create competing products/tools to FaB DB and its solutions.</span>
                        </p>
                        <p class="my-4">
                            Getting stated with consuming the FaB DB API is simple - simply utilise your favourite library
                            to make various requests to the various <a href="#endpoints" class="link">endpoints</a> we
                            have documented.
                        </p>

                        <a name="authentication"></a>
                        <h3 class="font-serif uppercase text-xl">Authentication</h3>
                        <p class="my-4">
                            In order to authenticate with the FaB DB API, you must have an API key. Your key consists of
                            a public API token and an associated API secret. The token is provided alongside all requests
                            you make to FaB DB's API. The secret, as its name suggests, is a secret token that you store
                            on your server and is used to sign all requests. You can generate your API key, and its
                            associated token and secret on this very page.
                        </p>

                        <api-token/>

                        <p class="my-4">
                            To authenticate, all requests must contain a header called "Authorization", ie:
                        </p>

                        <vue-code-highlight language="text" class="text-base">
<pre>
    Authorization: Bearer YOURTOKENHERE
</pre>
                        </vue-code-highlight>

                        <p class="my-4">
                            Each request must also be signed using your secret token. To do this, include one parameter in your query string/post data: time. Time must be a unix timestamp.
                        </p>
                        <p class="my-4">
                            Once that is done, you must hash the query string using the sha512 algorithm, using your
                            secret token as a prefix, wo it would look like this: THISISYOURSECRET1662853301
                            which will result in the following:
                        </p>

                        <vue-code-highlight language="text" class="text-base">
<pre>
    https://api.fabdb.net/cards?time=1662853301&hash=c5392d43c8f45e6e961ddf66dcfa36770a9964ad9e8feedd3e903d5d905821ae97e7de5578b09eb1bec008ef4731b457c525dc8d24b32ccfb086230c00e590b3
</pre>
                        </vue-code-highlight>

                        <p class="my-4">
                            On the FaB DB side, we then deconstruct this request, ensure that the hash matches the
                            provided token and then either allow or deny the request.
                        </p>
                        <p class="my-4">
                            <span class="italic">Note: your secret is securely stored and encrypted on the FaB DB servers.</span>
                        </p>

                        <a name="requests"></a>
                        <h3 class="font-serif uppercase text-xl">Requests</h3>
                        <p class="my-4">
                            All requests made to the API must be made securely (https) to: {{ domain }}.
                        </p>

                        <a name="formats"></a>
                        <h3 class="font-serif uppercase text-xl">Formats</h3>
                        <p class="my-4">
                            The FaB DB API supports multiple formats for output from the API, depending on your use case.
                            The default response is JSON, with both XML and CSV available when you set the accepted content
                            type as part of your requests headers, eg:
                        </p>
                        <p class="my-4 font-mono bg-gray-300 dark:bg-gray-900 p-4">
                            Accept: application/json<br>
                            Accept: application/xml<br>
                            Accept: text/csv
                        </p>

                        <a name="throttling"></a>
                        <h3 class="font-serif uppercase text-xl">Throttling</h3>
                        <p class="my-4">
                            Requests to the FaB DB API are throttled at 60 requests/minute for public API access. If you
                            need to make more requests than this, an API key can be provided to you which increase this to
                            600 per minute.
                        </p>

                        <hr size="1" class="mt-8">

                        <h2 class="font-serif uppercase text-2xl mt-8">Endpoints</h2>
                        <p class="my-4">
                            The FaB DB API supports a number of endpoints to help with your research, or write your own
                            application. Currently, those endpoints are centered around cards and decks that have been published
                            for the public to read and use themselves.
                        </p>

                        <a name="cards"></a>
                        <h3 class="font-serif uppercase text-xl">Cards</h3>
                        <p class="my-4">
                            The card database at FaB DB forms the backbone of all the other features, and so it makes
                            sense that it would also provide a powerful API to utilise that dataset.
                        </p>

                        <h4 class="font-bold text-lg">Card search</h4>
                        <p class="my-4 font-mono border border-gray-300 p-4">GET /cards</p>
                        <p class="my-4">Example response:</p>
                        <vue-code-highlight language="json" class="text-base dark:bg-gray-900 overflow-hidden">

<pre>
{
    "current_page":19,
    "data": [
        {
            "identifier":"WTR219",
            "name":"Nimblism",
            "keywords":["generic","action"],
            "stats":{"cost":"0","defense":"2","resource":"2"},
        },
        ...
    ],
    "first_page_url":"/cards?per_page=25&page=1",
    "from":451,
    "next_page_url":null,
    "path":"/cards",
    "per_page":"25",
    "prev_page_url":"/cards?per_page=25&page=18",
    "to":457
}</pre>
                        </vue-code-highlight>
                        <table class="my-4 w-full border-collapse border border-gray-500 text-base">
                            <thead class="font-bold bg-gray-100 dark:bg-gray-900">
                                <th class="text-left p-2 border border-gray-400">Parameter</th>
                                <th class="text-left p-2 border border-gray-400">Description</th>
                                <th class="text-left p-2 border border-gray-400">Options</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border border-gray-400">page</td>
                                    <td class="p-2 border border-gray-400">When paginating through data sets, specify the page.</td>
                                    <td class="p-2 border border-gray-400">Integer</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-gray-400">per_page</td>
                                    <td class="p-2 border border-gray-400">Specify the number of records per result set.</td>
                                    <td class="p-2 border border-gray-400">Integer. Max=100.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-gray-400">keywords</td>
                                    <td class="p-2 border border-gray-400">A string representing a search term.</td>
                                    <td class="p-2 border border-gray-400">String</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-gray-400">pitch</td>
                                    <td class="p-2 border border-gray-400">Search for a card with a given pitch.</td>
                                    <td class="p-2 border border-gray-400">String. Valid values are: (1, 2, or 3)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-gray-400">cost</td>
                                    <td class="p-2 border border-gray-400">Search for a card with a given cost.</td>
                                    <td class="p-2 border border-gray-400">String. Valid values are: (1, 2, 3, or 4+)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-gray-400">class</td>
                                    <td class="p-2 border border-gray-400">Search for a card that matches the required hero class.</td>
                                    <td class="p-2 border border-gray-400">
                                        String. Valid values are: brute, guardian, mechanologist, ninja, ranger, runeblade, warrior, wizard.
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-gray-400">rarity</td>
                                    <td class="p-2 border border-gray-400">Search for a card that matches the specified rarity.</td>
                                    <td class="p-2 border border-gray-400">
                                        String. Valid values are: C, R, S, T, L, F, P
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-gray-400">set</td>
                                    <td class="p-2 border border-gray-400">Search for cards from a given set.</td>
                                    <td class="p-2 border border-gray-400">
                                        String. Valid values are: WTR, ARC, CRU, MON
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h4 class="font-bold text-lg">View card</h4>
                        <p class="my-4 font-mono border border-gray-300 p-4">GET /cards/ARC000</p>
                        <p class="my-4">Example response:</p>
                        <vue-code-highlight language="javascript" class="text-base dark:bg-gray-900 overflow-hidden">
                            <pre>
{
    "identifier":"ARC000",
    "name":"Eye of Ophidia",
    "rarity":"F",
    "keywords":["generic","resource","gem"],
    "stats":{"resource":"3"},
    "text":"**Legendary** *(You may only have 1 Eye of Ophidia in your deck.)*\n\nWhen you pitch Eye of Ophidia, **opt 2**.",
    "flavour":"Beyond the turbulent waters of Death\u2019s Knell, the ocean stretches as far as the eye can see, an endless, unfathomable expanse of deep blue. The keeper looks upon the shifting tides, feeling the weight of time within its weary soul. As the great divide draws near, it relinquishes a part of itself, bequeathing the gift of its immeasurable knowledge. Under the light of the pale moon, the ocean calls it home, and at last, the keeper sinks into the deep, undisturbed.",
    "comments":"The second fabled card to be released, the Eye of Ophidia helped to establish the pattern that there will be a Fabled card in every set. Additionally, it set a new standard in artwork for the franchise, with the Eye of Ophidia being a truly beautiful card.",
    "next":"ARC001",
    "prev":"ARC218"
}
                            </pre>
                        </vue-code-highlight>

                        <a name="decks"></a>
                        <h4 class="font-bold text-lg">Decks</h4>
                        <h4 class="font-bold text-lg">View deck</h4>
                        <p class="my-4 font-mono border border-gray-300 p-4">GET /decks/{slug}</p>
                        <p class="my-4">Example response:</p>
                        <vue-code-highlight language="javascript" class="text-base dark:bg-gray-900 overflow-hidden">
                            <pre>
{
    "slug": "NmzrmMWV",
    "name": "Katsudon",
    "format": "constructed",
    "notes": null,
    "visibility": "public",
    "cardBack": 1,
    "createdAt": "2020-05-31 09:04:13",
    "totalVotes": 0,
    "myVote": 0,
    "cards": [
         {
            "identifier": "WTR082",
            "name": "Ancestral Empowerment",
            "rarity": "M",
            "stats": {"cost": "0", "defense": "2", "resource": "1"},
            "text": "",
            "keywords":["ninja", "attack", "reaction"],
            "flavour": "",
            "comments": "",
            "image": "https:\/\/fabdb2.imgix.net\/cards\/wtr\/82.png?w=300&fit=clip&auto=compress",
            "total": 3
        },
        ...
    ],
    "sideboard": []
}
                            </pre>
                        </vue-code-highlight>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {component as VueCodeHighlight} from 'vue-code-highlight';
    import ApiToken from "../Auth/ApiToken.vue";
    import Breadcrumbs from "../Components/Breadcrumbs.vue";
    import HeaderTitle from "../Components/HeaderTitle.vue";

    export default {
        components: {ApiToken, Breadcrumbs, HeaderTitle, VueCodeHighlight},

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
        },
    };
</script>

