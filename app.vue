<template>
    <div>
      <div class="absolute top-0 z-40 w-full">
        <Header />
      </div>
  
      <!-- Keep this sticky div at full width -->
      <div class="sticky top-0 z-20 bg-neutral-900">
        <h2 class="text-white font-bold p-2 pb-1">The most complete course available on Product Management. 13+ hours of videos, activities, interviews, &amp; more</h2>
        <div class="rating flex items-center p-2 pt-0">
          <div class="text-yellow-500 text-sm font-bold">4.5 <span>⭐</span></div>
          <div class="flex items-center text-blue-200 text-sm">
            <span>(1,632 ratings)</span>
            <p class="text-white ml-1">258,636 students</p>
          </div>
        </div>
      </div>
  
      <!-- Main content with equal margins on both sides -->
      <div class="mx-auto px-6 lg:px-8">
        <div ref="courseCard" class="absolute top-28 right-80" :class="{ 'fixed': isSticky }" :style="stickyStyle">
          <CourseCard />
        </div>
  
        <NuxtPage>
          <WebDeveloperBootcamp title="Become a Product Manager | Learn the Skills & Get the Job" :rating="4.5"
            :numRatings="59093" :numStudents="258,636" instructor="Cole Mercer, Evan Kimbrell" />
  
          <div class="px-6 lg:px-8">
          <WhatYoullLearn />
          <CourseInfoCard />
          <Companies/>
          <AccordionVue />
          
          <CourseDescription />
          <RequirementDescription/>
          <FeaturedReview/>
          <StudentAlsoBought />
          <FrequentlyBoughtTogether />
          <InstructorCard />
          <CardListsCole/>
          <CardListsEvan/>
          <Reviews />
  
        </div>
        <ExloreSkills />
  
      </NuxtPage>
  
        <!-- <Footer /> -->
      </div>
    </div>
  </template>
  
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Header from '~/components/Header.vue';
  import WebDeveloperBootcamp from '~/components/HeroSection.vue';
  import CourseCard from '~/components/CourseCard.vue';
  import WhatYoullLearn from '~/components/WhatYouLearn.vue';
  import ContentVue from '~/components/CourseContent.vue';
  import Companies from '~/components/Companies.vue';
  import CourseInfoCard from '~/components/CourseInfoCard.vue'
  import CourseDescription from '~/components/CourseDescription.vue'
  import StudentAlsoBought from '~/components/StudentsAlsoBought.vue'
  import FrequentlyBoughtTogether from '~/components/FrequentlyBoughtTogether.vue'
  import InstructorCard from '~/components/InstructorCard.vue'
  import FeaturedReview from '~/components/FeaturedReview.vue'
  import CardListsCole from '~/components/CardListsCole.vue'
  import RequirementDescription from './components/RequirementDescription.vue';
  import ExloreSkills from '~/components/ExploreSkills.vue'
  import CardListsEvan from './components/CardListsEvan.vue';
  
  export default {
    components: {
      Header,
      WebDeveloperBootcamp,
      CourseCard,
      WhatYoullLearn,
      ContentVue,
      RequirementDescription,
      CourseInfoCard,
      StudentAlsoBought,
      FrequentlyBoughtTogether,
      FeaturedReview,
      CardListsCole,
      CardListsEvan,
      ExloreSkills
    },
  
  };
  </script>
  