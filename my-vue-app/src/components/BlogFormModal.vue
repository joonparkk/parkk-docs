<script setup>
    import BlogForm from '@/components/BlogForm.vue'
    import { defineEmits } from 'vue';
    import Button from '@/components/ui/button/Button.vue'

    const emit = defineEmits(['close'])

    function close() {
        emit('close')
    }
</script>

<template>
    <div class="modal-overlay" @click.self="close">
        <div class="modal-content">
            <Button class="close-button" @click="close">x</Button>
            <BlogForm />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  inset: 0; /* top:0; right:0; bottom:0; left:0; */
  background: rgba(0, 0, 0, 0.5); /* dark transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* ensure it sits on top of everything */
}

.modal-content {
  background: black;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 800px;
  width: 90%;
  position: relative;

}

.close-button {
  position: absolute;
  top: .5rem;
  right: .5rem;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}
</style>