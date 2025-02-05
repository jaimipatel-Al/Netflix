<script setup>
</script>

<template>
  <section>
    <h1
      class="w-fit text-center text-3xl font-semibold border-b-4 border-yellow-500 mx-auto my-10"
    >
      Happy <span class="text-yellow-600"> Clients Says</span>
    </h1>

    <div class="grid grid-cols-3 gap-4 px-10">
      <div class="bg-gray-200 p-5 m-5 rounded rounded-xl">
        <img
          src="@/assets/img/user-1.png"
          class="w-1/2 m-auto py-2 rounded rounded-full hover:scale-105 ease-in duration-300 cursor-pointer"
          alt="..."
        />
        <div class="text-center">
          <p class="text-gray-700 m-3">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </p>
          <h5 class="text-xl text-gray-800 font-bold">Mark Miles</h5>
          <span class="text-gray-800 font-semibold">Banker</span>
        </div>
      </div>

      <div class="bg-gray-200 p-5 m-5 rounded rounded-xl">
        <img
          src="@/assets/img/user-2.png"
          class="w-1/2 m-auto py-2 rounded rounded-full hover:scale-105 ease-in duration-300 cursor-pointer"
          alt="..."
        />
        <div class="text-center">
          <p class="text-gray-700 m-3">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </p>
          <h5 class="text-xl text-gray-800 font-bold">Zuck Miles</h5>
          <span class="text-gray-800 font-semibold">Banker</span>
        </div>
      </div>

      <div class="bg-gray-200 p-5 m-5 rounded rounded-xl">
        <img
          src="@/assets/img/user-3.png"
          class="w-1/2 m-auto py-2 rounded rounded-full hover:scale-105 ease-in duration-300 cursor-pointer"
          alt="..."
        />
        <div class="text-center">
          <p class="text-gray-700 m-3">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </p>
          <h5 class="text-xl text-gray-800 font-bold">Regina Miles</h5>
          <span class="text-gray-800 font-semibold">Banker</span>
        </div>
      </div>
    </div>
  </section>
</template>