<template>
    <div class="container mx-auto">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Practise mode' }
                ],
            }
        }
    }
</script>
