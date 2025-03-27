<template>
  <div class="book-detail">
    <h1>
      <router-link to="/">&lt;</router-link>Book Details
    </h1>
    <div v-if="state.loading" class="loading">Loading...</div>
    <div v-else-if="state.error" class="error">{{ state.error }}</div>
    <div v-else-if="book" class="box-detail-box">
      <img :src="book.bookThumbnail" alt="Book Cover" />
      <div>
        <h2>{{ book.title }}</h2>
        <p>
          <strong>Authors:</strong>
          {{ book.authors?.join(', ') }}
        </p>
        <p>
          <strong>Description:</strong>
          {{ book.description }}
        </p>
        <p>
          <strong>Published Date:</strong>
          {{ book.publishedDate }}
        </p>
        <p>
          <strong>Page Count:</strong>
          {{ book.pageCount }}
        </p>
        <p>
          <strong>Categories:</strong>
          {{ book.categories?.join(', ') }}
        </p>
        <p>
          <strong>Language:</strong>
          {{ book.language }}
        </p>
        <a :href="book.previewLink" target="_blank">Show More</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import axios from '../service/axios'
import { onMounted, reactive, ref } from 'vue'

const router = useRoute()

const id = ref(null)
const book = ref(null)
const state = reactive({
  error: null,
  loading: false
})

const fetchBookDetail = async () => {
  state.loading = true
  const url = `https://www.googleapis.com/books/v1/volumes/${id.value}`
  await axios
    .get(url)
    .then((res) => {
      book.value = res.data?.volumeInfo
      book.value.bookThumbnail =
        book?.value?.imageLinks?.thumbnail ?? 'https://via.placeholder.com/150'
      state.loading = false
      state.error = null
    })
    .catch((error) => {
      state.loading = false
      state.error = error?.message ?? 'There are some issues with the display book details'
    })
}

onMounted(() => {
  id.value = router?.params?.id
  fetchBookDetail()
})
</script>

<style scoped>
.book-detail {
  margin: 20px;
}
h1 {
  padding: 10px 20px;
}
h1 a {
  padding-right: 20px;
  text-decoration: none;
  font-weight: 800;
}
.loading,
.error {
  font-size: 20px;
  text-align: center;
}
.loading {
  color: rgb(0, 89, 190);
}
.error {
  color: red;
}
.box-detail-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 75%;
  margin: 20px auto;
  box-shadow: 1px 1px 10px #ccc;
  border-radius: 20px;
  padding: 20px;
}
img {
  height: 400px;
  width: auto;
}
h2 {
  text-align: start;
  font-size: 30px;
  color: #2c2c2c;
  margin-bottom: 10px;
}
p {
  text-align: start;
  color: #535353;
  padding: 5px 0;
}
strong {
  color: #1b1b1b;
  font-weight: 800;
}
.box-detail-box a {
  text-decoration: none;
  font-size: 15px;
  padding-top: 10px;
  color: #0031b9;
}
@media screen and (max-width: 768px) {
  img {
    height: 300px;
    width: auto;
  }
  .box-detail-box {
    flex-direction: column;
    width: 90%;
  }
}
@media screen and (max-width: 576px) {
  .box-detail-box {
    flex-direction: column;
    width: 85%;
  }
}
</style>