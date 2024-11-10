<template>
    <div class="max-w-md md:max-w-3xl mx-20 mt-10">
        <h2 class="text-2xl font-bold mb-2">More Courses by <span class="text-violet-800">Evan Kimbrell</span></h2>
        <div class="grid border-b pb-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div v-for="(course, index) in courses" :key="index"
                class="flex flex-col items-start p-4 text-xs">
                <img :src="course.image" alt="Course Image" class="w-full h-32 object-cover rounded-md mb-4" />
                <h3 class="text-base font-semibold">{{ course.title }}</h3>
                <p class="text-gray-600 text-xs">by {{ course.author }}</p>

                <div class="flex items-start mt-2 text-base">
                    <p class="font-semibold mr-1">{{ course.rating }}</p>
                    <span class="text-yellow-600" v-for="n in Math.floor(course.rating)" :key="n">★</span>
                    <span class="text-gray-400" v-for="n in 5 - Math.floor(course.rating)" :key="n">★</span>
                    <span class="text-gray-500 ml-2 text-sm">({{ course.ratingCount }})</span>
                </div>

                <p class="text-gray-500 mt-1">
                    {{ course.hours }} total hours - {{ course.lectures }} lectures - {{ course.level }}
                </p>

                <p class="text-base font-bold mt-2">${{ course.price }}</p>
            </div>
        </div>
        <button class="w-full mt-4 border border-black py-2 mb-10 text-sm">Report Abuse</button>
    </div>
</template>

<script>
import evanCourseImage1 from "@/assets/images/evan/1.jpeg";
import evanCourseImage2 from "@/assets/images/evan/2.jpeg";
import evanCourseImage3 from "@/assets/images/evan/3.jpeg";

export default {
    data() {
        return {
            courses: [
                {
                    image: evanCourseImage1,
                    title: "TikTok Marketing 2024: Grow Your Account & Master TikTok Ads",
                    author: "Evan Kimbrell",
                    rating: 4.5,
                    ratingCount: 3238,
                    hours: 11.5,
                    lectures: 136,
                    level: "All Levels",
                    price: 69.99,
                },
                {
                    image: evanCourseImage2,
                    title: "Advanced Product Management: Vision, Strategy & Metrics",
                    author: "Evan Kimbrell",
                    rating: 4.4,
                    ratingCount: 9905,
                    hours: 5.5,
                    lectures: 37,
                    level: "Intermediate",
                    price: 69.99,
                },
                {
                    image: evanCourseImage3,
                    title: "Instagram Marketing 2024: Hashtags, Live, Stories, Ads & more",
                    author: "Evan Kimbrell",
                    rating: 4.4,
                    ratingCount: 9992,
                    hours: 23,
                    lectures: 168,
                    level: "All Levels",
                    price: 69.99,
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>
