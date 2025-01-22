<script setup>
import Footer from '../components/Footer.vue'
import Carousel from '../components/Carousel_Card.vue'
import dashboard from '../components/Dashboard.vue'
import Experience from '../components/Experience.vue'

const handleClick = () => {
  window.open('https://www.google.com', '_blank')
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <dashboard class="fixed z-40" />
    <!-- Hero -->
    <div class="flex">
      <div class="hero py-16">
        <div class="hero-content flex-col lg:flex-row">
          <img src="../assets/DSCF3145.JPG" class="max-w-72 rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Greetings!! Haikal Here</h1>
            <p class="py-6">
              Hello everyone, I am a students at University of Semarang that specializing in
              Full-Stack development, with a strong knowledge of web development and user
              interfaces. I have hands-on experience in building APIs and integrating them into
              scalable web applications to enhance functionality and user experience. I possess
              strong collaboration and communication skills, able to work effectively within a team.
            </p>
            <button class="btn btn-primary bg-primary" @click="handleClick">
              <a class="fas fa-briefcase"></a>CV Here
            </button>
          </div>
        </div>
      </div>
    </div>

    <h1 class="flex text-3xl font-bold justify-center space-x-2">
      <span>I Use This</span>
      <span class="text-primary">Tech Stack</span>
      <span>For My Development</span>
    </h1>
    <!-- Carousel + Card -->
    <div class="flex justify-center py-12">
      <Carousel />
    </div>

    <!-- Experience card -->
    <div class="">
      <Experience />
    </div>

    <!-- Footer -->
    <Footer class="mt-auto" />
  </div>
</template>
