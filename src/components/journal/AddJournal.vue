<script setup lang="ts">
import { computed, ref } from 'vue'

const body = ref('')
const charCount = computed(() => body.value.length)
const maxChars = 280

const handleTextInput = () => {}
</script>

<template>
  <form class="entry-form">
    <textarea
      :value="body"
      ref="textarea"
      @keyup="handleTextInput"
      placeholder="New Journal Entry for You"
    ></textarea>
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxChars }}</span>
      <button>Remember</button>
    </div>
  </form>
</template>
