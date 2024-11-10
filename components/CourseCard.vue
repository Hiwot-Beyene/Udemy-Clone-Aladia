<template>
  <div ref="courseCard" class="bg-white hidden md:inline z-40 shadow-lg overflow-hidden border w-[24rem]" :class="{ 'fixed': isSticky }"
    :style="computedStickyStyle">
    <div class="relative w-full">
      <div
        class="absolute flex justify-center items-center inset-0 bg-gradient-to-t from-black to-transparent opacity-60">
      </div>
      <div class="absolute top-1/3 flex flex-col justify-center items-center inset-0 text-white">
        <div class="text-white flex flex-col ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-20 h-20">
            <path fill-rule="evenodd"
              d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
              clip-rule="evenodd" />
          </svg>
          <div :class="{ 'hidden': isSticky }" class="mt-auto text-lg font-bold">Preview this course</div>
        </div>
      </div>
      <nuxt-link to="/" class="text-gray-800 font-bold text-lg w-full flex bg-red-200" :class="{ 'hidden': isSticky }">
        <img class="w-full" src="@/assets/images/frequentlybought/1.jpeg" alt="Logo">
      </nuxt-link>
    </div>
    <div class="flex w-full border-b">
      <div class="px-4 py-3 flex-1 text-center cursor-pointer text-gray-500 font-bold"
        :class="{ ' border-b-black border-b-2 text-gray-950': activeTab === 'personal' }"
        @click="activeTab = 'personal'">
        Personal
      </div>
      <div class="px-4 py-2 flex-1 text-center cursor-pointer text-gray-500 font-bold"
        :class="{ ' border-b-black border-b-2 text-gray-950': activeTab === 'teams' }" @click="activeTab = 'teams'">
        Teams
      </div>
    </div>
    <div class="p-8 pt-2">
      <div v-if="activeTab === 'personal'">
        <h2 class="text-xl text-gray-800  font-bold">Subscribe to Udemy's top courses</h2>
        <div class="text-gray-600 mb-4 text-sm">
          Get this course, plus 12,000+ of our top-rated courses, with Personal
          Plan.
          <span> <a href="#" class="text-purple-500 hover:underline">Learn more</a></span>
        </div>

        <div class="my-6 text-center">
          <button class="bg-purple-500 text-white px-4 py-3 w-full hover:bg-purple-600">
            Try Personal Plan for free
          </button>
          <p class="text-gray-600 mt-2  text-sm">
            Starting at $10.00 per month after trial
          </p>
          <p class="text-gray-600  text-sm">Full Lifetime Access
          </p>
        </div>
        <div class="my-4">
          <p class="font-bold text-gray-800">$69.99 </p>
 <button class="mt-4 px-4 py-3 border border-black hover:bg-gray-100 w-full">
            Add to cart
          </button>
          <p class="text-gray-600 mt-2 text-sm text-center">30-Day Money-Back Guarantee</p>
          <p class="text-gray-600 text-sm text-center">Full Lifetime Access</p>
        </div>
        <div class="bg-white ">
          <div class="flex justify-between text-gray-800 font-semibold text-sm items-center">
            <div class="0">Share</div>
            <a href="#" class=" hover:underline">Gift this course</a>

            <div>Apply Coupon</div>
          </div>

          <div class="flex justify-between items-center py-4 border-t">

            <div class="flex items-center">
              <input type="text" class="border outline-none px-2 py-2" placeholder="Udemy coupon" />
              <button class="bg-gray-900 text-white px-4 py-2 hover:bg-gray-700" @click="applyCoupon">
                Apply
              </button>
            </div>
          </div>
        </div>
       
      </div>
      <div class="p-4" v-if="activeTab === 'teams'">
        <h2 class="text-sm">Subscribe to this course and 27,000+ top-rated Udemy courses for your
          organization.</h2>
        <button class="bg-purple-500 w-full text-white px-4 py-2 rounded hover:bg-purple-600 mt-4">
          Try Udemy Business
        </button>
        <ul class="mt-4">
          <li class="flex items-center mb-2">
            <svg class="w-6 h-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>For teams of 2 or more users</span>
          </li>
          <li class="flex items-center mb-2">
            <svg class="w-6 h-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>27,000+ fresh & in-demand courses</span>
          </li>
          <li class="flex items-center mb-2">
            <svg class="w-6 h-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Learning Engagement tools</span>
          </li>
          <li class="flex items-center mb-2">
            <svg class="w-6 h-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>SSO and LMS Integrations</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CourseCard',
  data() {
    return {
      activeTab: 'personal',
      couponCode: 'ST2MT110724ANEW',
      isSticky: false,
      scrollPosition: 0,
    };
  },
  computed: {
    computedStickyStyle() {
      if (this.isSticky) {
        return { top: '40px', right: '80px', position: 'fixed' };
      }
      return { top: '4px', right: '0px', position: 'absolute' };
    },
  },
  methods: {
    applyCoupon() {
      console.log(`Coupon code applied: ${this.couponCode}`);
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const bottomThreshold = 1035;

      if (this.scrollPosition > 400 && this.scrollPosition + viewportHeight < pageHeight - bottomThreshold) {
        this.isSticky = true;
      } else if (this.scrollPosition + viewportHeight >= pageHeight - bottomThreshold) {
        this.isSticky = true;
        this.computedStickyStyle.top = `${pageHeight - viewportHeight - bottomThreshold}px`;
      } else {
        this.isSticky = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.fixed {
  position: fixed;
}
</style>
