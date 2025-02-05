<script setup>
</script>

<template>
  <footer class="p-10 flex justify-between items-center text-white bg-gray-900">
    <div>
      <div class="flex space-x-3">
        <a class="hover:text-yellow-500" href="#">Downloads</a>
        <a class="hover:text-yellow-500" href="#">License</a>
      </div>
      <div class="flex space-x-4">
        <a class="me-3 my-3 hover:text-yellow-500" href="#">About</a>
        <a class="me-3 my-3 hover:text-yellow-500" href="#">Pricing</a>
        <a class="me-3 my-3 hover:text-yellow-500" href="#">Careers</a>
        <a class="me-3 my-3 hover:text-yellow-500" href="#">Help</a>
      </div>
      <span class="font-semibold text-xl py-3">
        &copy2020 all rights reserved by al siam
      </span>
    </div>
    <div>
      <h4 class="font-semibold text-2xl">Get the App</h4>
      <img
        src="@/assets/img//app-store.png"
        class="w-40 my-3 hover:scale-105 ease-in duration-300 cursor-pointer"
      />
      <img
        src="@/assets/img//play-store.png"
        class="w-40 my-3 hover:scale-105 ease-in duration-300 cursor-pointer"
      />
    </div>
  </footer>
</template>