
import { urlParse } from 'source-map/lib/util';
<template>
    <iframe :src="actualUrl" height="400" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full"></iframe>
</template>

<script>
    export default {
        props: {
            url: {
                required: true,
                type: String
            }
        },

        data() {
            let params = new URLSearchParams('?'+this.url.split('?')[1]);
            
            let hasEmbed = this.url.indexOf('embed') !== -1;
            let actualUrl = hasEmbed ? this.url : 'https://www.youtube.com/embed/'+params.get('v');

            return { actualUrl };
        }
    };
</script>
