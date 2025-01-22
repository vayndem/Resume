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

const getItemsPerSlide = () => {
  if (window.innerWidth < 640) return 1 // Mobile
  if (window.innerWidth < 1024) return 2 // Tablet
  return 3 // Desktop
}

const itemsPerSlide = ref(getItemsPerSlide())

const slidesGrouped = computed(() => {
  const grouped = []
  for (let i = 0; i < items.length; i += itemsPerSlide.value) {
    grouped.push(items.slice(i, i + itemsPerSlide.value))
  }
  return grouped
})

const currentIndex = ref(0)
const interval = ref(null)
const touchStart = ref(null)
const touchEnd = ref(null)

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slidesGrouped.value.length) % slidesGrouped.value.length
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slidesGrouped.value.length
}

const startAutoSlide = () => {
  stopAutoSlide()
  interval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  if (interval.value) {
    clearInterval(interval.value)
    interval.value = null
  }
}

const handleKeydown = (event) => {
  if (event.key === 'ArrowLeft') prevSlide()
  if (event.key === 'ArrowRight') nextSlide()
}

const handleTouchStart = (event) => {
  touchStart.value = event.touches[0].clientX
}

const handleTouchMove = (event) => {
  touchEnd.value = event.touches[0].clientX
}

const handleTouchEnd = () => {
  if (!touchStart.value || !touchEnd.value) return
  const diff = touchStart.value - touchEnd.value
  if (Math.abs(diff) > 50) {
    // Minimum swipe distance
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
  touchStart.value = null
  touchEnd.value = null
}

const handleResize = () => {
  const newItemsPerSlide = getItemsPerSlide()
  if (newItemsPerSlide !== itemsPerSlide.value) {
    itemsPerSlide.value = newItemsPerSlide
    currentIndex.value = 0 // Reset to first slide when layout changes
  }
}

onMounted(() => {
  startAutoSlide()
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  stopAutoSlide()
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div
    class="carousel rounded-box w-full relative px-8 sm:px-12"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @mouseenter="stopAutoSlide"
    @mouseleave="startAutoSlide"
  >
    <!-- Carousel Wrapper -->
    <div
      class="carousel-track flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slidesGrouped"
        :key="index"
        class="carousel-item w-full flex justify-center gap-4 sm:gap-6 lg:gap-8"
      >
        <div
          v-for="(item, i) in slide"
          :key="i"
          class="card bg-base-100 image-full w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 shadow-xl transition-transform duration-300 hover:scale-110"
        >
          <figure>
            <img :src="item.img" :alt="item.title" class="object-contain p-2" />
          </figure>
          <div class="card-body items-center justify-center p-2 sm:p-4">
            <h2 class="card-title text-sm sm:text-base text-center">{{ item.title }}</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-base-300 hover:bg-base-200 rounded-full p-2 sm:p-3 transition-colors duration-300 z-10"
      @click="prevSlide"
      aria-label="Previous slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 sm:h-6 sm:w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-base-300 hover:bg-base-200 rounded-full p-2 sm:p-3 transition-colors duration-300 z-10"
      @click="nextSlide"
      aria-label="Next slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 sm:h-6 sm:w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
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
