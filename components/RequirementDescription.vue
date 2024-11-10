<template>
  <div class="max-w-screen-lg mx-20 mt-9 mb-8 px-4">
    <!-- Requirements Section -->
    <h2 class="text-xl font-bold mb-4">Requirements</h2>
    <ul class="list-disc list-inside text-gray-700 mb-6 d-text-sm">
      <li>No pre-requisites, although familiarity with basic business concepts is helpful.</li>
    </ul>

    <!-- Description Section -->
    <h2 class="text-xl font-bold mb-4">Description</h2>
    <div :class="{'line-clamp-5': !isExpanded}" class="text-gray-700 mb-2">
      <p class="d-text-sm">
        Updated November 2024: Over 4,000 students who have taken this course have gotten jobs as Product Managers! Students now work at companies like Google, Zynga, Airbnb, Wal-Mart, Dell, Booking.com, Jet.com, Vodafone, HomeAway, Boeing, Freelancer.com, Wayfair, and more!
      </p>
      <p v-if="isExpanded" class="mt-2 d-text-sm">
        The most updated and complete Product Management course on Udemy! You'll learn the skills that make up the entire Product Management job and process: from ideation to market research, UX wireframing, prototyping, technology, metrics, and finally building the product with user stories, project management, scoping, and leadership. We even have interviews with real-life PMs, Q&A sessions with students, and a comprehensive guide to preparing and interviewing for a Product Management job.
      </p>
      <p v-if="isExpanded" class="mt-2 d-text-sm">
        Right now, there are over 3,000+ job listings worldwide that are looking for Product Managers, that pay on average $100,000 / year. The demand for Product Management is increasing at an insane rate. More and more companies are finally figuring out how important this discipline and role is to their success.
      </p>
      <p v-if="isExpanded" class="mt-2 d-text-sm">
        Students aren't required to know anything beforehand—we'll teach you the fundamentals, how to apply them, develop into an advanced product manager, and maximize your chances to get a job as a Product Manager.
      </p>

      <!-- Who this course is for Section -->
      <div v-if="isExpanded" class="mt-4">
        <h2 class="text-xl font-bold mb-2">Who this course is for:</h2>
        <ul class="list-disc list-inside text-gray-700 d-text-sm">
          <li>Anyone looking to get a job in Product Management</li>
          <li>Anyone wanting to transition into Product Management</li>
          <li>Already established Product Managers who want to advance their skillset</li>
          <li>Entrepreneurs looking to master the product development process</li>
        </ul>
      </div>
    </div>

    <!-- Show More/Less Button -->
    <button @click="toggleDescription" class="text-blue-600 font-semibold mt-2 focus:outline-none">
      {{ isExpanded ? 'Show less' : 'Show more' }}
      <span :class="isExpanded ? 'rotate-180' : ''" class="transform transition-transform inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isExpanded = ref(false);

function toggleDescription() {
  isExpanded.value = !isExpanded.value;
}
</script>

<style scoped>
.line-clamp-5 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.d-text-sm {
  font-family: var(--font-stack-text);
  font-weight: 400;
  line-height: 1.4;
}
</style>
