<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const experienceRefs = ref([])
const humanityRefs = ref([])
const experienceVisibility = ref([])
const humanityVisibility = ref([])

onMounted(async () => {
  await nextTick()
  experienceRefs.value.forEach((el, i) => {
    experienceVisibility.value[i] = useElementVisibility(el)
  })
  humanityRefs.value.forEach((el, i) => {
    humanityVisibility.value[i] = useElementVisibility(el)
  })
})

const experiences = [
  {
    id: 1,
    title: 'Studi Independen (SI) Bersertifikat  - FullStack Developer with PT.Stechoq',
    period: 'Feb 2024 - June 2024',
    competency: 'Mastery of Vue.js and Restful API using Express.js',
    skills: ['Vue.js', 'Tailwind', 'Express.js'],
  },
  {
    id: 2,
    title: 'Prigel DATAINS x AI Squad UNNES Batch 2',
    period: 'Aug 2023 - Jan 2024',
    competency: 'NLP Engineering, Database, and Flask',
    skills: ['MongoDB', 'Flask', 'Wiring API'],
  },
  {
    id: 3,
    title: 'Prigel DATAINS x AI Squad UNNES Batch 1',
    period: 'Feb 2023 - July 2023',
    competency: 'Computer Vision Engineering, Github, And HTML and CSS',
    skills: ['Github', 'HTML & CSS', 'YoloV5 Engine'],
  },
]
const humanity = [
  {
    id: 1,
    title: 'Unnes Lantip 4 (PPL) by UNNES',
    period: 'Sep 2024 - Oct 2024',
    competency: 'Vice Chairman',
    skills: ['Managing Team', 'Advisor for Chairman'],
  },
  {
    id: 2,
    title: 'Unnes Giat 9 (KKN) by UNNES',
    period: 'June 2024 - Aug 2024',
    competency: 'Human Relation in Desa Jambangan Bawang, Batang',
    skills: ['Speaking Relationship'],
  },
  {
    id: 3,
    title: 'Technoday 2022 by UKM Riptek University of Semarang',
    period: 'Sep 2022 - Okt 2022',
    competency: 'Sponsorship',
    skills: ['Public Speaking', 'Sponsorship'],
  },
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
    <!-- Experiences Section -->
    <div class="rounded-lg space-y-6">
      <h1 class="flex flex-wrap text-2xl font-bold space-x-2 px-6">
        <span>My</span>
        <span class="text-primary">Experience</span>
        <span>in Website Development</span>
      </h1>
      <div
        v-for="experience in experiences"
        :key="experience.id"
        class="bg-base-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <div class="flex gap-4">
          <div class="w-full">
            <h3 class="text-xl font-semibold">{{ experience.title }}</h3>
            <p class="text-sm text-gray-400">{{ experience.period }}</p>
            <p class="text-sm my-2">
              <span class="font-semibold">Competency:</span> {{ experience.competency }}
            </p>
            <div class="flex gap-2 flex-wrap mt-3">
              <span
                v-for="skill in experience.skills"
                :key="skill"
                class="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-700 transition-colors"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Humanity Section -->
    <div class="rounded-lg space-y-6">
      <h1 class="flex flex-wrap text-2xl font-bold space-x-2 px-6">
        <span>My</span>
        <span class="text-primary">Organization</span>
        <span>Skills in University</span>
      </h1>
      <div
        v-for="item in humanity"
        :key="item.id"
        class="bg-base-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <div class="flex gap-4">
          <div class="w-full">
            <h3 class="text-xl font-semibold">{{ item.title }}</h3>
            <p class="text-sm text-gray-400">{{ item.period }}</p>
            <p class="text-sm my-2">
              <span class="font-semibold">Position:</span> {{ item.competency }}
            </p>
            <div class="flex gap-2 flex-wrap mt-3">
              <span
                v-for="skill in item.skills"
                :key="skill"
                class="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-700 transition-colors"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
