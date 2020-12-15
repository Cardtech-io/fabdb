<template>
    <iframe :width="width" :height="height" :src="url('html', {target: '_blank'})" frameborder="0" scrolling="no" allowtransparency="true" hspace="0" vspace="0" class="block mx-auto">
        <a :href="url('clk', {pair: 'as'})" target="_blank">
            <img style="border:0;max-width:100%;height:auto;" :src="url('img', {pair: 'as'})" alt="i" :width="width" :height="height"/>
        </a>
    </iframe>
</template>

<script>
    export default {
        props: {
            height: {
                required: true,
                type: Number
            },

            width: {
                required: true,
                type: Number
            },

            zone: {
                required: true,
                type: Number
            }
        },

        methods: {
            params(data) {
                let query = [];

                for (let i in data) {
                    query.push(i+'='+data[i]);
                }

                return query.join('&');
            },

            url(type, extra) {
                let params = this.params({
                    zid: this.zone,
                    oid: 26444,
                    do: type,
                    wd: this.width,
                    ht: this.height,
                    ...extra
                });

                return 'https://g.adspeed.net/ad.php?'+params;
            }
        }
    };
</script>

<style scoped>

</style>
