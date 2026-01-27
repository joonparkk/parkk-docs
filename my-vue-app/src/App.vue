<script setup lang="ts">
import { RouterView } from 'vue-router';
import BlogHeader from '@/components/BlogHeader.vue';
import BlogFooter from '@/components/BlogFooter.vue';
</script>

<template>
<div class="application">
    <BlogHeader class="header"/>
    <RouterView class="main-content"/>
    <BlogFooter class="footer"/>
</div>

</template>

<style scoped>
div{
    .application{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        .main-content{
            flex:1;
        }
    }
}
</style>
