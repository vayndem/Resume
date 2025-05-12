<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
const handleClick = () => {
  window.open('https://sistem-soal-nusaputera.web.app', '_blank')
}
</script>

<template>
  <div class="card bg-base-100 image-full w-max h-64 shadow-sm">
    <figure>
      <img src="/image.png " alt="Website Screenshot" class="opacity-45" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Essay Question Generator</h2>
      <h2 class="card-title">Using Gemini 1.5 Flash</h2>
      <p class="text-sm">
        Website Pembuat Soal Uraian Secara Otomatis<br />
        Menggunakan AI Secara Otomatis
      </p>

      <div class="card-actions mt-auto justify-end">
        <button class="btn btn-primary bg-primary hover:btn-accent" @click="handleClick">
          <i class="fa-solid fa-globe"></i> Visit
        </button>
      </div>
    </div>
  </div>
</template>
