<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const items = [
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    title: 'Vue.JS',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    title: 'Tailwind',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    title: 'JavaScript',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    title: 'Python',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    title: 'Flask',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    title: 'MySQL',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    title: 'HTML',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    title: 'CSS',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    title: 'Boostrap',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    title: 'MongoDB',
  },
]

const itemsPerSlide = 3
const slidesGrouped = computed(() => {
  const grouped = []
  for (let i = 0; i < items.length; i += itemsPerSlide) {
    grouped.push(items.slice(i, i + itemsPerSlide))
  }
  return grouped
})

const currentIndex = ref(0)
const interval = ref(null)

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slidesGrouped.value.length) % slidesGrouped.value.length
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slidesGrouped.value.length
}

const startAutoSlide = () => {
  interval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  clearInterval(interval.value)
}

const handleKeydown = (event) => {
  if (event.key === 'ArrowLeft') prevSlide()
  if (event.key === 'ArrowRight') nextSlide()
}

onMounted(() => {
  startAutoSlide()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  stopAutoSlide()
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="carousel rounded-box w-full relative">
    <!-- Carousel Wrapper -->
    <div
      class="carousel-track flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slidesGrouped"
        :key="index"
        class="carousel-item w-full justify-center gap-8 flex"
      >
        <div
          v-for="(item, i) in slide"
          :key="i"
          class="card bg-base-100 image-full w-32 h-32 shadow-xl"
        >
          <figure>
            <img :src="item.img" :alt="item.title" class="object-contain p-2" />
          </figure>
          <div class="card-body">
            <br />
            <h2 class="card-title">{{ item.title }}</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-base-300 rounded-full p-2"
      @click="prevSlide"
    >
      &larr;
    </button>
    <button
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-base-300 rounded-full p-2"
      @click="nextSlide"
    >
      &rarr;
    </button>
  </div>
</template>

<style scoped>
.carousel {
  overflow: hidden;
  position: relative;
}
.carousel-track {
  display: flex;
  width: 100%;
}
.carousel-item {
  flex-shrink: 0;
  width: 100%;
}
</style>
