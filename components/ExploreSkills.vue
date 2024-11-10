<template>
  <div class="bg-neutral-900 text-white p-8">
      <!-- Top Companies Section -->
      <div class="md:flex items-center justify-between  space-x-2 border-b border-b-gray-400 pb-4 mb-8">
          <p class="text-lg text-center text-wrap font-semibold">
              Top companies choose <span class="text-blue-200">Udemy Business</span> to build in-demand career skills.
          </p>
          <div class="flex items-center justify-between flex-wrap px-4 space-x-4">
              <img src="@/assets/images/nasdaq-light.svg" alt="Nasdaq" class="h-12">
              <img src="@/assets/images/volkswagen-light.svg" alt="Volkswagen" class="h-12">
              <img src="@/assets/images/box-light.svg" alt="Box" class="h-12">
              <img src="@/assets/images/netapp-light.svg" alt="NetApp" class="h-12">
              <img src="@/assets/images/eventbrite-light.svg" alt="Eventbrite" class="h-12">
          </div>
      </div>

      <!-- Skills and Certifications Section -->
      <div>
          <h2 class="text-xl font-bold mb-6">Explore top skills and certifications</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-gray-100 text-sm">
              <!-- Column 1 -->
              <div>
                  <h3 class="font-semibold mb-3 text-base">Certifications by Issuer</h3>
                  <ul class="space-y-1">
                      <li>Amazon Web Services (AWS) Certifications</li>
                      <li>Six Sigma Certifications</li>
                      <li>Microsoft Certifications</li>
                      <li>Cisco Certifications</li>
                      <li>Tableau Certifications</li>
                      <li>See all Certifications</li>
                  </ul>
              </div>

              <!-- Column 2 -->
              <div>
                  <h3 class="font-semibold mb-3 text-base">Web Development</h3>
                  <ul class="space-y-1">
                      <li>Web Development</li>
                      <li>JavaScript</li>
                      <li>React.JS</li>
                      <li>Angular</li>
                      <li>Java</li>
                  </ul>
              </div>

              <!-- Column 3 -->
              <div>
                  <h3 class="font-semibold mb-3 text-base">IT Certifications</h3>
                  <ul class="space-y-1">
                      <li>Amazon AWS</li>
                      <li>AWS Certified Cloud Practitioner</li>
                      <li>AZ-900: Microsoft Azure Fundamentals</li>
                      <li>AWS Certified Solutions Architect - Associate</li>
                      <li>Kubernetes</li>
                  </ul>
              </div>

              <!-- Column 4 -->
              <div>
                  <h3 class="font-semibold mb-3 text-base">Leadership</h3>
                  <ul class="space-y-1">
                      <li>Leadership</li>
                      <li>Management Skills</li>
                      <li>Project Management</li>
                      <li>Personal Productivity</li>
                      <li>Emotional Intelligence</li>
                  </ul>
              </div>

              <!-- Column 5 -->
              <div>
                  <h3 class="font-semibold mb-3 text-base">Certifications by Skill</h3>
                  <ul class="space-y-1">
                      <li>Cybersecurity Certification</li>
                      <li>Project Management Certification</li>
                      <li>Cloud Certification</li>
                      <li>Data Analytics Certification</li>
                      <li>HR Management Certification</li>
                      <li>See all Certifications</li>
                  </ul>
              </div>

              <!-- Column 6 -->
              <div>
                  <h3 class="font-semibold mb-3 text-base">Data Science</h3>
                  <ul class="space-y-1">
                      <li>Data Science</li>
                      <li>Python</li>
                      <li>Machine Learning</li>
                      <li>ChatGPT</li>
                      <li>Deep Learning</li>
                  </ul>
              </div>

              <!-- Column 7 -->
              <div>
                  <h3 class="font-semibold mb-3 text-base">Communication</h3>
                  <ul class="space-y-1">
                      <li>Communication Skills</li>
                      <li>Presentation Skills</li>
                      <li>Public Speaking</li>
                      <li>Writing</li>
                      <li>PowerPoint</li>
                  </ul>
              </div>


              <!-- Column 8 -->
              <div>
                  <h3 class="font-semibold mb-3 text-base">Business Analytics & Intelligence</h3>
                  <ul class="space-y-1">
                      <li>Microsoft Excel</li>
                      <li>SQL</li>
                      <li>Microsoft Power BI</li>
                      <li>Data Analysis</li>
                      <li>Business Analysis</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ExploreSkills",
};
</script>

<style scoped></style>