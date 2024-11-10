<template>
    <div class="bg-white max-w-md md:max-w-3xl mx-20 mt-4 p-4">
      <!-- Instructors Section -->
      <div>
        <h2 class="text-2xl font-bold mb-4">Instructors</h2>
  
        <!-- Cole Mercer -->
        <div class="mb-6">
          <h3 class="text-lg mb-1 font-bold text-purple-800 underline cursor-pointer">
            Cole Mercer
          </h3>
          <p class="text-gray-600 mb-2">Product Nerd | Ex-Lead PM @ SoundCloud, VP PM @ Semrush</p>
          <div class="flex items-center space-x-4 mb-4">
            <img src="@/assets/images/cole/cole.jpeg" alt="Cole Mercer" class="w-28 h-28 rounded-full object-cover" />
            <div>
              <div class="flex flex-col space-y-1 my-2 mb-4 text-sm text-gray-700">
                <div class="flex items-center space-x-2">
                  <span>⭐ 4.5 Instructor Rating</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span>🎖️ 72,804 Reviews</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span>👥 294,607 Students</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span>🎓 5 Courses</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="text-gray-800 text-sm leading-relaxed mb-4">
              Hey there! I'm Cole, and I'm happy to be a Udemy Instructor Partner with over 250,000 students worldwide. I found my love for teaching in 2015 and have courses across Udemy and LinkedIn Learning where I am lucky enough to be rated a top instructor on both platforms.
            </div>
            <button @click="showMoreCole = !showMoreCole" class="text-indigo-800 text-sm font-bold hover:underline mt-4">
              {{ showMoreCole ? 'Show less' : 'Show more' }}
            </button>
            <div v-if="showMoreCole" class="text-gray-800 text-sm leading-relaxed mt-4">
              <p>Before that, I was a VP at Semrush holding the position of Head of Product for the Academy division - the company was a public one with over 1000 employees. I also worked at SoundCloud and Bonobos, consulting for various tech companies and holding multiple product management roles.</p>
            </div>
          </div>
        </div>
  
        <!-- Evan Kimbrell -->
        <div class="mb-6">
          <h3 class="text-lg mb-1 font-bold text-purple-800 underline cursor-pointer">
            Evan Kimbrell
          </h3>
          <p class="text-gray-600 mb-2">Founder of Sprintkick | Ex-VC | Ex-startup founder</p>
          <div class="flex items-center space-x-4 mb-4">
            <img src="@/assets/images/evan/evan.jpeg" alt="Evan Kimbrell" class="w-28 h-28 rounded-full object-cover" />
            <div>
              <div class="flex flex-col space-y-1 my-2 mb-4 text-sm text-gray-700">
                <div class="flex items-center space-x-2">
                  <span>⭐ 4.5 Instructor Rating</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span>🎖️ 145,210 Reviews</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span>👥 1,060,599 Students</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span>🎓 24 Courses</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="text-gray-800 text-sm leading-relaxed mb-4">
              Hi, I'm Evan Kimbrell. Thanks for checking out my course! Currently, I'm the Founder and Director of Sprintkick, a full-service digital agency based out of San Francisco. I've worked with clients from startups to Fortune 100s.
            </div>
            <button @click="showMoreEvan = !showMoreEvan" class="text-indigo-800 text-sm font-bold hover:underline mt-4">
              {{ showMoreEvan ? 'Show less' : 'Show more' }}
            </button>
            <div v-if="showMoreEvan" class="text-gray-800 text-sm leading-relaxed mt-4">
              <p>Previously, I worked as a VC at Juvo Capital and co-founded an educational software startup, ScholarPRO. I’ve also had the privilege of being featured in Forbes, CNN, and Entrepreneur Magazine.</p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMoreCole: false,
        showMoreEvan: false,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles, if needed */
  </style>
  