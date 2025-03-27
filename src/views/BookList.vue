<template>
  <div>
    <h1>Book List</h1>
    <div class="search-box">
      <input
        type="text"
        v-model="state.search"
        placeholder="Search by genre/category"
        @blur="searchBook"
        @keyup.enter="searchBooks"
      />
      <p v-if="state.totalBooks">Search book from {{ state.totalBooks }} result</p>
    </div>
    <div class="list-area">
      <div v-if="state.loading" class="loading">Loading Data...</div>
      <div v-else-if="state.error" class="error">{{ state.error }}</div>
      <div v-else class="book-list">
        <BookItem v-for="book in books" :key="book.id" :book="book" />
      </div>
    </div>
    <BookPagination
      v-if="!state.loading && !state.error && state.totalBooks >10"
      :currentPage="state.currentPage"
      :perPage="state.perPage"
      :totalBooks="state.totalBooks"
      @pageChange="pageChange"
    />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import axios from '../service/axios'
import BookItem from '../components/BookItem.vue'
import BookPagination from '../components/BookPagination.vue'

const books = ref([])
const state = reactive({
  search: null,
  error: null,
  loading: false,
  currentPage: 1,
  perPage: 10,
  totalBooks: 0
})

const fetchBooksData = async () => {
  state.loading = true
  const startIndex = (state.currentPage - 1) * state.perPage
  const url = `https://www.googleapis.com/books/v1/volumes?q=${state.search}&startIndex=${startIndex}&maxResults=${state.perPage}`
  await axios
    .get(url)
    .then((res) => {
      books.value = res.data.items
      state.totalBooks = res.data?.totalItems ?? 0
      state.loading = false
      state.error = null
    })
    .catch((error) => {
      state.loading = false
      state.error = error?.message ?? 'There are some issues in preparing the books list'
    })
}

const searchBook = () => {
  state.currentPage = 1
  fetchBooksData()
}

const pageChange = (page) => {
  state.currentPage = page
  fetchBooksData()
}

onMounted(() => {
  fetchBooksData()
})
</script>

<style scoped>
h1 {
  padding: 10px 20px;
  text-align: center;
}
.search-box {
  margin: 20px;
}
.search-box input {
  padding: 15px;
  width: 100%;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  box-shadow: 1px 1px 10px #ccc;
}
.search-box p {
  color: #464646;
  margin-left: 20px;
  padding-top: 5px;
}
.list-area .loading,
.list-area .error {
  font-size: 20px;
  text-align: center;
}
.list-area .loading {
  color: rgb(0, 89, 190);
}
.list-area .error {
  color: red;
}
.book-list {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  flex-wrap: wrap;
}
</style>