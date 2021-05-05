<template>
    <div>
        
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.get('cards/for-packs?set='+this.$route.params.set).then(response => {
                console.log(response);
            })
        }
    }
</script>
