<script setup>
</script>

<template>
  <section id="features" class="py-5">
    <div class="text-center font-semibold mb-5">
      <h1 class="text-3xl">
        Featured Bike <span class="text-yellow-600">2021</span>
      </h1>
      <p
        class="w-fit text-2xl m-auto border-b-4 border-yellow-500 text-yellow-600"
      >
        Best bike collection
      </p>
    </div>
    <div class="flex">
      <div>
        <img
          style="filter: grayscale(100%)"
          src="@/assets/img/header-bike.png"
          alt=""
          class="flex-1 hover:scale-105 ease-in duration-300 cursor-pointer"
        />
      </div>
      <div>
        <img src="@/assets/img/header-bike.png" alt="" class="flex-1 hover:scale-105 ease-in duration-300 cursor-pointer" />
      </div>
      <div>
        <img
          style="filter: grayscale(50%)"
          src="@/assets/img/header-bike.png"
          alt=""
          class="flex-1 hover:scale-105 ease-in duration-300 cursor-pointer"
        />
      </div>
    </div>
  </section>
</template>