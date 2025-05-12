<!-- eslint-disable no-unused-vars -->
<script setup>
import Dashboard from '@/components/Dashboard.vue'
import Footer from '@/components/Footer.vue'
import Soon from '@/components/reuse/Soon.vue'
import { ref, computed } from 'vue'

const left = [
  {
    id: 1,
    waktu: '2023-10-01',
    judul: 'Studi Independen (SI) Bersertifikat  - FullStack Developer with PT.Stechoq',
    tentang: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
  },
  {
    id: 2,
    waktu: '2023-10-02',
    judul: 'Prigel DATAINS x AI Squad UNNES Batch 2',
    tentang: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
  },
]

const right = [
  {
    id: 1,
    waktu: '2023-10-01',
    judul: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    tentang: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
  },
  {
    id: 2,
    waktu: '2023-10-02',
    judul: 'Prigel DATAINS x AI Squad UNNES Batch 2',
    tentang: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
  },
]

// Combine left and right arrays into a single array
const combinedTimeline = computed(() => {
  const result = []
  const maxLength = Math.max(left.length, right.length)

  for (let i = 0; i < maxLength; i++) {
    if (i < left.length) result.push(left[i])
    if (i < right.length) result.push(right[i])
  }

  return result
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Dashboard class="fixed z-40" />
    <Soon class="fixed z-30" />
    <!-- bagian left and right -->
    <div class="16px flex flex-col items-center justify-center mt-16">
      <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <!-- Loop through combined left and right array with alternating positions -->
        <li v-for="(item, index) in combinedTimeline" :key="'timeline-' + index">
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
            :class="{ 'timeline-start': index % 2 === 0, 'timeline-end': index % 2 !== 0 }"
            class="mb-10"
          >
            <time class="font-mono italic">{{ item.waktu }}</time>
            <div class="text-lg font-black">{{ item.judul }}</div>
            {{ item.tentang }}
          </div>
          <hr />
        </li>
      </ul>
    </div>
    <Footer class="mt-auto z-40" />
  </div>
</template>
