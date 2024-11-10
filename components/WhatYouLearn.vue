<template>
  <div class="max-w-md md:max-w-4xl px-4 border mx-20 mt-10">
    <div class="p-6 text-xs">
      <h2 class="text-2xl font-bold mb-4">What you'll learn</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-400" :class="{
        'max-h-[260px] overflow-hidden': !showMore,
        'max-h-full': showMore
      }">
        <div v-for="(item, index) in visibleLearningItems" :key="index" class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
            class="w-5 h-5 text-black mr-2 flex-shrink-0 mt-1">
            <path fill-rule="evenodd"
              d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
              clip-rule="evenodd" />
          </svg>
          <p >{{ item }}</p>
        </div>
      </div>

      <div v-if="!showMore" class="h-12 -mt-16 blur-xl bg-white w-full relative overflow-hidden"></div>

      <div class="text-start">
        <button @click="toggleVisibility" class="text-purple-950 text-base bg-white font-bold hover:underline">
          {{ showMore ? 'Show Less' : 'Show More' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import learningItemsData from '@/data/LearningItems.json'; // Importing JSON data

export default {
  data() {
    return {
      learningItems: learningItemsData,
      showMore: false,
    };
  },
  computed: {
    visibleLearningItems() {
      //items shown based on expanded state
      return this.showMore ? this.learningItems : this.learningItems.slice(0, 8);
    }
  },
  methods: {
    toggleVisibility() {
      this.showMore = !this.showMore;
    }
  }
};
</script>

<style scoped>

</style>
