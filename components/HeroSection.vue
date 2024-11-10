<template>
  <div class="bg-neutral-900 text-white p-10 px-5 flex w-full">
    <div class="container flex flex-col space-y-3 px-20 mr-auto w-7/12 text-start justify-start">
      <div class="flex items-center justify-between">
        <div class="breadcrumb text-blue-200 font-semibold text-sm mb-6">
          <nuxt-link to="/it-software" class="hover:text-gray-300">Business 
          </nuxt-link>
          <span class="mx-2">&gt;</span>
          <nuxt-link to="/business" class="hover:text-gray-300">Management
          </nuxt-link>
          <span class="mx-2">&gt;</span>
          <span>Product Management</span>
        </div>
      </div>

      <h1 class="text-3xl font-bold my-4">{{ title }}</h1>
      <h2 class="text-lg ">The most complete course available on Product Management. 13+ hours of videos, activities, interviews, &amp; more.</h2>
      <div class="rating flex items-center mt-10 text-xs">

        <div class="text-yellow-400"> 4.7 <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>

        <div class="flex items-center text-blue-200 text-sm"> <span class="">( {{ numRatings }} ratings )</span>
          <p class="text-white ml-1">{{ formattedNumStudents }} students</p>

        </div>
      </div>


      <div class=" mt-2 text-sm">Created by <nuxt-link to="/teach" class="text-blue-200 underline hover:text-gray-600">
          {{ instructor }}
        </nuxt-link> </div>

      <div class="flex flex-wrap items-center space-x-4 pt-2 text-sm">
        <div class="flex items-center space-x-1 text-sm">
          <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
              <path fill-rule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clip-rule="evenodd" />
            </svg>
          </span>
          <span>Last updated</span>
          <span class="">10/2022</span>
        </div>

        <div class="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>

          <span>English</span>
        </div>

        <div class="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd"
              d="M2.5 4A1.5 1.5 0 0 0 1 5.5V6h18v-.5A1.5 1.5 0 0 0 17.5 4h-15ZM19 8.5H1v6A1.5 1.5 0 0 0 2.5 16h15a1.5 1.5 0 0 0 1.5-1.5v-6ZM3 13.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm4.75-.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
              clip-rule="evenodd" />
          </svg>


          <span>English [Auto], Indonesian [Auto]</span>
          <span class="text-purple-600 underline cursor-pointer">1 more</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { LanguageIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
export default {

  name: 'WebDeveloperBootcamp',
  components: {

    LanguageIcon,
    ChevronDownIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    numRatings: {
      type: Number,
      required: true
    },
    numStudents: {
      type: Number,
      required: true
    },
    instructor: {
      type: String,
      required: true
    }
  },
  computed: {
    // Format numRatings and numStudents with commas
    formattedNumRatings() {
      return this.numRatings.toLocaleString();
    },
    formattedNumStudents() {
      return this.numStudents.toLocaleString();
    }
  }
}
</script>

<style scoped>
/* Additional styling can go here */
</style>