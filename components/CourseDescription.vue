<template>
  <div class="accordion max-w-md md:max-w-3xl mx-20 mt-10">
    <h3 class="text-2xl text-gray-800 font-bold mb-6">{{ courseContent.title }}</h3>
    <div class="flex items-center justify-between py-3">
      <p class="text-sm text-gray-700">{{ courseContent.overview }}</p>
      <button class="text-violet-800 font-bold text-sm" @click="toggleAll">
        {{ allExpanded ? 'Collapse All sections' : 'Expand All sections' }}
      </button>
    </div>
    <div class="accordion-item border border-b-0 border-gray-300" v-for="(item, index) in courseContent.accordionItems" :key="index">
      <div class="accordion-header" @click="toggleAccordion(index)">
        <svg class="w-4 h-4 transform transition-transform duration-300" :class="{ 'rotate-180': isOpen[index] }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
        <h3 class="text font-bold mr-auto ml-3">{{ item.title }}</h3>
        <p class="text-gray-700 text-sm">{{ item.time }}</p>
      </div>

      <div class="accordion-content" v-show="isOpen[index]">
        <p class="text-gray-700 text-sm">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import courseContent from '@/data/courseContent.json'; // Importing the JSON data

export default {
  data() {
    return {
      isOpen: Array(courseContent.accordionItems.length).fill(false),
      courseContent: courseContent // Storing the imported JSON data
    };
  },
  computed: {
    allExpanded() {
      return this.isOpen.every(status => status);
    },
  },
  methods: {
    toggleAccordion(index) {
      this.isOpen[index] = !this.isOpen[index];
    },
    toggleAll() {
      const expand = !this.allExpanded;
      this.isOpen = this.isOpen.map(() => expand);
    },
  },
};
</script>

<style scoped>
.accordion-header {
  @apply flex justify-between items-center cursor-pointer bg-gray-50 p-4 px-6;
}

.accordion-header h3 {
  @apply text-gray-800;
}

.accordion-header svg {
  @apply transition-transform duration-300 text-gray-700;
}

.accordion-content {
  @apply bg-white p-4;
  transition: max-height 0.3s ease-out;
  overflow: hidden;
}
</style>
