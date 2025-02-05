<script setup></script>

<template>
  <header class="text-white bg-gray-900">
    <nav class="container flex justify-between items-center m-auto">
      <span class="logo-text text-5xl py-8"
        >Bike Sell<sup class="logo-dot">.</sup></span
      >
      <ul class="text-center flex space-x-8 items-center text-lg">
        <li class="p-2 font-medium hover:text-gray-600">Home</li>
        <li class="p-2 font-medium text-gray-400 hover:text-gray-600">Features</li>
        <li class="p-2 font-medium text-gray-400 hover:text-gray-600">Shop</li>
        <li class="p-2 font-medium text-gray-400 hover:text-gray-600">News</li>
        <li class="p-2 font-medium text-gray-400 hover:text-gray-600">Contact Us</li>
      </ul>
    </nav>
    <div class="slider-img flex items-center">
      <div class="w-3/5 ml-10">
        <p class="text-gray-300 mb-3">
          Computer-controlled digital transistorized with electronic advance
        </p>
        <h1 class="text-white text-5xl font-bold mb-2">Honda CBR 300R</h1>
        <p class="text-gray-300">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <button
          class="rounded-md bg-yellow-600 px-5 py-2.5 my-2 text-md font-semibold text-white shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Purchase
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.slider-img {
  height: 85vh;
  background-image: url(@/assets/img/awesomebike.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
}

.logo-text {
  font-family: "Berkshire Swash", cursive;
}

.logo-dot {
  font-size: 60px;
  margin-left: 4px;
  color: #4eda4e;
}
</style>
