<template>
    <header>
        <div class="logo">
            <img src="../assets/omori.png">
        </div>
        <div class="intro">            
            <h1>Parkk Docs</h1>
            <h2>Learn, Apply, Reflect</h2>
        </div>


        <nav>
            <div class="nav-routes">
                <router-link v-if="currentRoute.name !== 'home'" :to="{name: 'home'}">Home</router-link>
                <router-link v-if="currentRoute.name !== 'about'" :to="{name: 'about'}">About</router-link>
                <Button @click="showBlogForm = true">Create Post</Button>
            </div>
        </nav>
        <BlogFormModal v-if="showBlogForm" @close="showBlogForm = false"/>
    </header>
</template>

<script setup>
    import {RouterLink, useRoute} from 'vue-router';
    import { ref } from 'vue';
    import Button from '@/components/ui/button/Button.vue';
    import BlogFormModal from './BlogFormModal.vue';
    const currentRoute = useRoute()

    const showBlogForm = ref(false)

</script>

<style lang="scss" scoped> 
header{
    display:flex;
    background-color: rgb(189, 187, 187);
    align-items: center;
    justify-content: space-between;
    padding: 15px 16px;
    .logo{
        display:flex;
        img{
            max-width: 80px;
        }
    }
    .intro{
        h1{
            font-size: 40px;
        }
        h2{
            text-align: center;
        }
    }
    nav{
        .nav-routes{
            display:flex;
            flex-direction: column;
            align-items: center;
            gap:25px;
        }
    }

}
</style>