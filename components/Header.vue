<template>
  <header class="bg-white shadow-md text-sm">
    <div
      class="container mx-auto py-3 flex items-center justify-between space-x-6"
    >
      <nuxt-link to="/" class="text-gray-800 font-bold text-lg">
        <img src="@/assets/images/logo.jpg" alt="Logo" />
      </nuxt-link>

      <nuxt-link to="/catergory"> Category </nuxt-link>

      <div class="relative flex-grow">
        <input
          type="text"
          placeholder="Search for anything"
          class="bg-gray-50 border border-black rounded-full pl-12 pr-4 py-3 w-full focus:outline-none"
        />

        <div
          class="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          <div class="h-5 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <nuxt-link to="/business" class="text-gray-800 hover:text-gray-600">
          Udemy Business
        </nuxt-link>
        <nuxt-link to="/teach" class="text-gray-800 hover:text-gray-600">
          Teach on Udemy
        </nuxt-link>
        <button class="p-1 text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>

        <button
          class="bg-white px-4 py-2 hover:bg-gray-200 border border-black"
        >
          Log in
        </button>
        <button class="bg-gray-800 text-white px-4 py-2 hover:bg-gray-800">
          Sign up
        </button>
        <button class="bg-white p-1 hover:bg-gray-200 border border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </button>
      </div>
    </div>
    
  </header>
</template>

<script>
import { ShoppingCartIcon as CartIcon } from "@heroicons/vue/24/outline";

export default {
  name: "Header",
  components: {
    CartIcon,
  },
};
</script>

<style scoped></style>