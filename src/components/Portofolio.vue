<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
const handleClick1 = () => {
  window.open('https://sistem-soal-nusaputera.web.app', '_blank')
}

const handleClick2 = () => {
  window.open('https://quran-searcher.streamlit.app', '_blank')
}

const handleClick3 = () => {
  window.open('https://github.com/vayndem/Flask_Backend', '_blank')
}
</script>

<template>
  <div class="flex flex-nowrap gap-4 p-4 overflow-x-auto">
    <div class="card bg-base-100 image-full w-max h-64 shadow-sm flex-shrink-0">
      <figure>
        <img src="/image.png " alt="Website Screenshot" class="opacity-45" />
      </figure>

      <div class="card-body">
        <h2 class="card-title">Essay Question Generator</h2>

        <h2 class="card-title pb-4">Using Gemini 1.5 Flash</h2>

        <div class="flex flex-wrap gap-2">
          <span class="badge">Vue</span>
          <span class="badge">Tailwind CSS</span> <span class="badge">Gemini</span>
        </div>

        <div class="card-actions mt-auto justify-end">
          <button class="btn btn-primary bg-primary hover:btn-accent" @click="handleClick1">
            <i class="fa-solid fa-globe"></i> Visit
          </button>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 image-full w-max h-64 shadow-sm flex-shrink-0">
      <figure>
        <img src="/image2.png " alt="Website Screenshot" class="opacity-45" />
      </figure>

      <div class="card-body">
        <h2 class="card-title">Quran Verse Searcher</h2>

        <h2 class="card-title pb-4">Using Gemini and Streamlit</h2>

        <div class="flex flex-wrap gap-2">
          <span class="badge">Gemini</span>
          <span class="badge">Streamlit</span>
        </div>

        <div class="card-actions mt-auto justify-end">
          <button class="btn btn-primary bg-primary hover:btn-accent" @click="handleClick2">
            <i class="fa-solid fa-globe"></i> Visit
          </button>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 image-full w-max h-64 shadow-sm flex-shrink-0">
      <figure><img src="/image3.png" alt="Image3" class="opacity-45" /></figure>

      <div class="card-body">
        <h2 class="card-title">Basic CRUD on Flask</h2>

        <h2 class="card-title pb-4">(On Progress)</h2>

        <div class="flex flex-wrap gap-2">
          <span class="badge">Flask</span> <span class="badge">JWT</span>
        </div>

        <div class="card-actions mt-auto justify-end">
          <button class="btn btn-primary bg-primary hover:btn-accent" @click="handleClick3">
            <i class="fa-solid fa-globe"></i> Visit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
