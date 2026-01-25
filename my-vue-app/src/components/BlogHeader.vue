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
            <ul class="nav-routes">
                <router-link v-if="currentRoute.name !== 'home'" :to="{name: 'home'}">Home</router-link>
                <router-link v-if="currentRoute.name !== 'about'" :to="{name: 'about'}">About</router-link>
            </ul>
        </nav>
    </header>
</template>

<script setup>
    import {RouterLink, useRoute} from 'vue-router';
    const currentRoute = useRoute()
</script>

<style lang="scss" scoped> 
header{
    display:flex;
    background-color: aquamarine;
    align-items: center;
    justify-content: space-between;
    padding: 25px 16px;
    .logo{
        display:flex;
        img{
            max-width: 100px;
        }
    }
    .intro{
        h1{
            font-size: 45px;
        }
        h2{
            text-align: center;
        }
    }
    nav{
        .nav-routes{
            display:flex;
            flex-direction: column;
            gap:25px;
        }
    }

}
</style>