<template>
  <div class="bg-white max-w-md md:max-w-3xl mx-20 mt-10">
    <!-- Explore Related Topics -->
    <div class="mb-6">
      <h3 class="text-2xl font-bold text-gray-950 mb-4">Explore related topics</h3>
      <div class="flex flex-wrap gap-2">
        <span class="px-5 font-bold py-3 border border-black rounded-full text-gray-900 hover:bg-gray-100 cursor-pointer">
          Product Management
        </span>
        <span class="px-5 font-bold py-3 border border-black rounded-full text-gray-900 hover:bg-gray-100 cursor-pointer">
          Career Development
        </span>
        <span class="px-5 font-bold py-3 border border-black rounded-full text-gray-900 hover:bg-gray-100 cursor-pointer">
          Business Strategy
        </span>
      </div>
    </div>

    <!-- Course Includes -->
    <div>
      <h3 class="text-2xl font-bold text-gray-950 mb-4 mt-12">This course includes:</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553 2.276a2 2 0 010 3.448L15 18m0 0l-4.553-2.276a2 2 0 010-3.448L15 10m0 8v-8" />
          </svg>
          13 hours on-demand video
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm6 8a6 6 0 10-12 0h12z" />
          </svg>
          Access on mobile and TV
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          25 articles
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m1 5h2a2 2 0 012 2v1a2 2 0 01-2 2h-6a2 2 0 01-2-2v-1a2 2 0 012-2h2m0-8h.01M12 4h.01M17 4h.01M7 4h.01M12 12h.01M12 20h.01M17 20h.01M7 20h.01M4 12h.01M4 20h.01M4 4h.01" />
          </svg>
          120 downloadable resources
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m1 5h2a2 2 0 012 2v1a2 2 0 01-2 2h-6a2 2 0 01-2-2v-1a2 2 0 012-2h2m0-8h.01M12 4h.01M17 4h.01M7 4h.01M12 12h.01M12 20h.01M17 20h.01M7 20h.01M4 12h.01M4 20h.01M4 4h.01" />
          </svg>
          Closed captions
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m1 5h2a2 2 0 012 2v1a2 2 0 01-2 2h-6a2 2 0=" />
          </svg>
          Certificate of completion
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseInfoCard',
}
</script>
