<template>
    <div class="bg-white max-w-md md:max-w-3xl mx-20 mt-10">
        <h2 class="text-2xl font-bold">Students also bought</h2>

        <!-- Display limited or full list based on showAllCourses -->
        <div v-for="(course, index) in displayedCourses" :key="index"
            class="flex items-center justify-between py-4 border-b last:border-b-0">
            <!-- Course Image -->
            <img :src="course.image" alt="Course image" class="w-16 h-16 mr-4">

            <!-- Course Details -->
            <div class="flex-1">
                <h3 class="font-bold text-gray-900 mr-6">{{ course.title }}</h3>

                <div class="flex items-center text-gray-600 text-sm mt-1 space-x-2">
                    <!-- Optional Bestseller Badge -->
                    <span v-if="course.isBestseller"
                        class="bg-yellow-200 text-yellow-800 px-2 py-0.5 text-xs font-semibold">Bestseller</span>

                    <span class="font-bold text-emerald-800">{{ course.totalHours }} total hours</span>
                    <span class="text-gray-400">•</span>
                    <span>Updated {{ course.updatedDate }}</span>
                </div>
            </div>

            <!-- Course Rating and Enrollment -->
            <div class="flex items-center justify-between text-sm text-gray-700 w-1/3">
                <div class="flex items-center space-x-1">
                    <span class="font-semibold">{{ course.rating }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-600" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                            d="M10 15l-5.878 3.09 1.123-6.555L.49 6.82l6.586-.957L10 0l2.924 5.864 6.586.957-4.755 4.715 1.123 6.555z" />
                    </svg>
                </div>

                <span>{{ course.enrollments.toLocaleString() }}</span>
                <div class="text-lg font-bold text-gray-900 mt-1">{{ course.price }}</div>
            </div>
            <!-- Favorite Icon -->
            <button
                class="ml-4 flex justify-center items-center text-gray-500 hover:text-gray-800 w-10 h-10 rounded-full border border-black">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <!-- Outlined Heart Shape -->
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </button>
        </div>

        <!-- Show More / Show Less Button -->
        <button click="toggleCourses"
            class="w-full mt-4 border-black border text-sm py-3 font-semibold hover:bg-gray-100">
            {{ showAllCourses ? "Show Less" : "Show More" }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            courses: [
                {
                    image: "/assets/images/studentsalsobought/1.jpeg",
                    title: "Complete Product Management Course: Become a Product Manager",
                    totalHours: "24.5",
                    updatedDate: "7/2023",
                    rating: 4.3,
                    enrollments: 3411,
                    price: "$64.99",
                    isBestseller: false,
                },
                {
                    image: "/assets/images/studentsalsobought/2.jpeg",
                    title: "Master Product Management by Actually Building a Product",
                    totalHours: "15.5",
                    updatedDate: "11/2024",
                    rating: 4.7,
                    enrollments: 7399,
                    price: "$64.99",
                    isBestseller: true,
                },
                {
                    image: "/assets/images/studentsalsobought/3.jpeg",
                    title: "Product Management A-Z: Hands-On, Real-World Simulation",
                    totalHours: "30",
                    updatedDate: "8/2023",
                    rating: 4.8,
                    enrollments: 5675,
                    price: "$74.99",
                    isBestseller: false,
                },
                {
                    image: "/assets/images/studentsalsobought/4.jpeg",
                    title: "Become a Product Manager | Learn the Skills & Get Hired",
                    totalHours: "19.5",
                    updatedDate: "10/2024",
                    rating: 4.6,
                    enrollments: 9821,
                    price: "$69.99",
                    isBestseller: true,
                },
                {
                    image: "/assets/images/studentsalsobought/5.jpeg",
                    title: "Product Management: Become a PM in 10 Days",
                    totalHours: "12.5",
                    updatedDate: "12/2023",
                    rating: 4.4,
                    enrollments: 4751,
                    price: "$54.99",
                    isBestseller: false,
                },
                {
                    image: "/assets/images/studentsalsobought/6.jpeg",
                    title: "Agile Product Management with Scrum",
                    totalHours: "8.5",
                    updatedDate: "9/2023",
                    rating: 4.5,
                    enrollments: 5220,
                    price: "$39.99",
                    isBestseller: true,
                },
                {
                    image: "/assets/images/studentsalsobought/7.jpeg",
                    title: "Advanced Product Management: Build Digital Products",
                    totalHours: "16",
                    updatedDate: "11/2023",
                    rating: 4.7,
                    enrollments: 6530,
                    price: "$79.99",
                    isBestseller: true,
                },
                {
                    image: "/assets/images/studentsalsobought/8.jpeg",
                    title: "Product Management Essentials for Beginners",
                    totalHours: "11",
                    updatedDate: "10/2024",
                    rating: 4.6,
                    enrollments: 2401,
                    price: "$49.99",
                    isBestseller: false,
                },
                {
                    image: "/assets/images/studentsalsobought/9.jpeg",
                    title: "Hands-On Product Management for Startups",
                    totalHours: "21",
                    updatedDate: "8/2023",
                    rating: 4.8,
                    enrollments: 8703,
                    price: "$74.99",
                    isBestseller: true,
                },
                {
                    image: "/assets/images/studentsalsobought/10.jpeg",
                    title: "Fundamentals of Product Management",
                    totalHours: "14",
                    updatedDate: "7/2023",
                    rating: 4.3,
                    enrollments: 6231,
                    price: "$59.99",
                    isBestseller: false,
                },
                {
                    image: "/assets/images/studentsalsobought/11.jpeg",
                    title: "Strategic Product Management: Planning for Success",
                    totalHours: "10.5",
                    updatedDate: "6/2024",
                    rating: 4.4,
                    enrollments: 3930,
                    price: "$54.99",
                    isBestseller: false,
                },
                {
                    image: "/assets/images/studentsalsobought/12.jpeg",
                    title: "Leadership in Product Management",
                    totalHours: "22",
                    updatedDate: "5/2023",
                    rating: 4.7,
                    enrollments: 4125,
                    price: "$79.99",
                    isBestseller: true,
                },
            ],
            showAllCourses: false,
        };
    },
    computed: {
        displayedCourses() {
            return this.showAllCourses ? this.courses : this.courses.slice(0, 5);
        }
    },
    methods: {
        toggleCourses() {
            this.showAllCourses = !this.showAllCourses;
        }
    }
};
</script>

<style scoped>
/* Add any additional styling if necessary */
</style>
