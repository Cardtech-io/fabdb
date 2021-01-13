<template>
    <div :style="style" class="mx-auto" v-if="marketable">
        <div ref="ad"></div>
    </div>
</template>

<script>
    import postscribe from 'postscribe';
    import {mapGetters} from 'vuex';

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

        data() {
            return {
                style: 'max-width: '+this.width+'px; max-height: '+this.height+'px'
            }
        },

        computed: {
            ...mapGetters('session', ['marketable'])
        },

        methods: {
            params(data) {
                let query = [];

                for (let i in data) {
                    query.push(i+'='+data[i]);
                }

                return query.join('&');
            },

            url(type) {
                let params = this.params({
                    do: type,
                    zid: this.zone,
                    oid: 26444,
                    wd: -1,
                    ht: -1,
                    target: '_blank',
                    noerror: 1
                });

                return 'https://g.adspeed.net/ad.php?'+params;
            }
        },

        mounted() {
            if (!this.marketable) return;

            setTimeout(() => {
                let url = this.url('js');
                let tag = '<'+'script'+' src="'+url+'" async>'+'<'+'/script>';

                postscribe(this.$refs.ad, tag);
            }, 100)
        }
    }
</script>
