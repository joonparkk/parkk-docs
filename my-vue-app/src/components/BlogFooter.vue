<script setup>
    import {RouterLink, useRoute} from 'vue-router';
    const currentRoute = useRoute()
</script>

<template>
    <footer>
        <div class="subscription">
            <h1>Subscribe to my newsletter</h1>
            <input class="emailInput" type="email" placeholder="Enter your email">
        </div>
        <div class="contactMe">
            <h1>Contact Me</h1>
            <p>ryanjparkk02@gmail.com</p>
        </div>
    </footer>

</template>


<style lang="scss" scoped>
footer{
    display:flex;
    background-color: rgb(189, 187, 187);
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px;
    .emailInput{
        border: 2px solid black;
        background-color: lightgrey;
    }
    .contactMe{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
}

</style>