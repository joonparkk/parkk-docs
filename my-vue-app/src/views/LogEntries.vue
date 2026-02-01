<script lang="ts" setup>
import ExpandableLog from '@/components/ExpandableLog.vue';
import { Button } from '@/components/ui/button';
import { reactive } from 'vue';
const logState = reactive({
    isExpanded: false,
}) 

function toggle(){
    logState.isExpanded = !logState.isExpanded;
}
</script>


<template>
    <div class="LogFolder">
        <Button @click="toggle"
        class = "logEntry bg-black-300 h-15 rounded-none"
        >Welcome to Parkk Docs</Button>
        <ExpandableLog :isExpanded = "logState.isExpanded" />
    </div>
</template>

<style lang="scss" scoped>
div{
    .LogFolder{
        border: 5px solid black;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        height: 100%;
        background-color:black
    }
    .logEntry{
        border: 1px solid red;
        padding:10px;
    }
}
</style>