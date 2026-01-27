<script lang="ts" setup>
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
        class = "logEntry"
        :class="{'h-200 duration-400': logState.isExpanded}"
        >Entry 1</Button>
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
    }
    .logEntry{
        border: 1px solid red;
        padding:10px;
    }
}
</style>