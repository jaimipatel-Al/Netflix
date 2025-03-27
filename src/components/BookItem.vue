<template>
  <div @click="goToBookDetail(book.id)" class="book-box">
    <img v-if="bookThumbnail" :src="bookThumbnail" alt="Book Cover" />
    <div>
      <h3>{{ book.volumeInfo.title }}</h3>
      <p class="authors">
        <strong>Authors:</strong>
        {{ authors }}
      </p>
      <p class="description">{{ props?.book?.volumeInfo?.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
})
const router = useRouter()

const authors = computed(() => props.book.volumeInfo.authors?.join(', '))
const bookThumbnail = computed(() => {
  // Return a placeholder image or handle case where thumbnail is not available
  // Example placeholder URL
  return props.book?.volumeInfo?.imageLinks?.thumbnail ?? 'https://via.placeholder.com/150'
})

const goToBookDetail = (id) => {
  router.push('/detail/' + id)
}
</script>

<style scoped>
.book-box {
  width: 18%;
  min-width: 300px;
  box-shadow: 1px 1px 10px #ccc;
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  text-align: center;
  height: 470px;
  transition: 0.5s;
}
.book-box:hover {
  transform: translate(0, -5px);
}
img {
  height: 200px;
  width: auto;
}
h3 {
  text-align: start;
  font-size: 20px;
  color: #2c2c2c;
  margin-bottom: 10px;
  /* truncate after 2 line */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
p {
  text-align: start;
  color: #1b1b1b;
}
strong {
  font-weight: 800;
}
.authors {
  /* truncate after 2 line */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.description {
  padding-top: 10px;
  color: #535353;
  /* truncate after 5 line */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media screen and (max-width: 992px) {
  .book-box {
    width: 30%;
    margin: 0 20px;
  }
}
@media screen and (max-width: 768px) {
  .book-box {
    width: 50%;
    margin: 0 20px;
  }
}
@media screen and (max-width: 576px) {
  .book-box {
    width: 100%;
    margin: 0 20px;
  }
}
</style>