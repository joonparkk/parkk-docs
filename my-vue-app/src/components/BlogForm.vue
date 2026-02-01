<script setup>
import { ref, onMounted, nextTick } from 'vue'
import  Input  from '@/components/ui/input/Input.vue'
import  Textarea  from '@/components/ui/textarea/Textarea.vue'
import  Button  from '@/components/ui/button/Button.vue'

// Form state
const title = ref('')
const date = ref(new Date().toISOString().substr(0, 10))
const text = ref('')
const image = ref(null)
const textarea = ref(null)

// Auto-grow textarea
function autoResize() {
  const el = textarea.value
  if (!el) return
  el.style.height = 'auto'
  el.style.height = el.scrollHeight + 'px'
}

// Handle image upload
function handleImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    image.value = file
  }
}

// Submit
function submitForm() {
  if (!title.value || !text.value || !image.value) {
    alert('Title, content, and image are required!')
    return
  }
  console.log({ title: title.value, date: date.value, text: text.value, image: image.value })
  alert('Blog post submitted!')
}
</script>

<template>
  <form @submit.prevent="submitForm" class="max-w-3xl mx-auto p-6 bg-zinc-900 rounded-md shadow-md flex flex-col gap-6">

    <!-- Title -->
    <div class="BlogForm flex flex-col">
      <label for="title" class="mb-1 text-zinc-100 font-semibold">Title</label>
      <Input
        id="title"
        v-model="title"
        placeholder="Enter the blog title"
        class="bg-zinc-800 text-zinc-100 border-zinc-700"
      />
    </div>

    <!-- Date -->
    <div class="flex flex-col">
      <label for="date" class="mb-1 text-zinc-100 font-semibold">Date</label>
      <Input
        id="date"
        type="date"
        v-model="date"
        class="bg-zinc-800 text-zinc-100 border-zinc-700"
      />
    </div>

    <!-- Image Upload -->
    <div class="flex flex-col">
      <label for="image" class="mb-1 text-zinc-100 font-semibold">Associated Image</label>
      <input
        id="image"
        type="file"
        accept="image/*"
        @change="handleImageUpload"
        class="bg-zinc-800 text-zinc-100 border border-zinc-700 rounded-md p-2 cursor-pointer"
      />
      <div v-if="image" class="mt-2">
        <img :src="URL.createObjectURL(image)" class="max-h-60 rounded-md object-cover" alt="Preview" />
      </div>
    </div>

    <!-- Blog Content -->
    <div class="flex flex-col">
      <label for="text" class="mb-1 text-zinc-100 font-semibold">Content</label>
      <Textarea
        ref="textarea"
        id="text"
        v-model="text"
        placeholder="Write your blog content..."
        @input="autoResize"
        class="bg-zinc-800 text-zinc-100 border-zinc-700 resize-none overflow-hidden min-h-[200px]"
        rows="10"
      ></Textarea>
    </div>

    <!-- Submit -->
    <Button type="submit" class="bg-zinc-700 hover:bg-zinc-600 text-zinc-100">
      Publish Post
    </Button>
  </form>
</template>


<style lang="scss" scoped>

</style>