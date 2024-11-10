<template>
  <div class="max-w-xl md:max-w-3xl mx-4 md:mx-20 mt-4 p-4">
    <h2 class="text-2xl font-bold">⭐ {{ courseRating }} course rating • {{ totalRatings }} ratings</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ReviewCard
        v-for="(review, index) in reviews"
        :key="index"
        :reviewerName="review.reviewerName"
        :rating="review.rating"
        :date="review.date"
        :comment="review.comment"
      />
    </div>
    <div class="flex justify-start mt-4">
      <button class="px-3 font-bold text-sm text-gray-800 py-2 border border-black  transition">
        Show all reviews
      </button>
    </div>
  </div>
</template>

<script>
import ReviewCard from "./ReviewCard.vue";
import reviewsData from '@/data/reviews.json';

export default {
  name: "Reviews",
  components: {
    ReviewCard,
  },
  data() {
    return {
      courseRating: "4.7",
      totalRatings: "2K",
      reviews: reviewsData.reviews,
    };
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
