<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Previous</button>
    <span>{{currentPage}}</span>
    <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">Next</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  },
  totalBooks: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['pageChange'])

const totalPages = computed(() => Math.ceil(props.totalBooks / props.perPage))

// On page change
const changePage = (page) => {
  emit('pageChange', page)
}
</script>

<style scoped>
.pagination {
  text-align: center;
  margin: 20px;
}
button {
  width: 120px;
  font-size: 20px;
  padding: 10px 20px;
  text-align: center;
  margin: 10px 30px;
  background: #00628f;
  border-radius: 30px;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  transition: 0.5s;
}
button:hover {
  background: #003c58;
}
button:disabled,
button[disabled] {
  background: #0071a5;
  color: #ccc;
}
span {
  font-size: 20px;
  font-weight: 800;
  padding: 10px 15px;
  border-radius: 50%;
  box-shadow: 1px 1px 20px #ccc;
}
@media screen and (max-width: 576px) {
  button {
    width: 100px;
    font-size: 15px;
  }
  span {
    font-size: 15px;
  }
}
</style>