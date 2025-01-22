<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
const HandleInstagram = () => {
  window.open('https://www.instagram.com/haikal.abror/', '_blank')
}
const HandleLinkedin = () => {
  window.open('https://www.linkedin.com/in/haikal-abror', '_blank')
}
</script>
<template>
  <footer class="footer bg-neutral text-neutral-content items-center p-4">
    <aside class="hidden md:flex xl:flex items-center gap-2">
      <i class="fa-solid fa-font-awesome text-xl hover:scale-110 transition-transform"></i>
      <p class="font-bold">Keep In Touch</p>
    </aside>
    <nav
      class="grid-flow-col gap-4 md:place-self-center md:justify-self-end sm:justify-center sm:place-self-center sm:gap-9"
    >
      <a @click="HandleInstagram">
        <i class="fa-brands fa-instagram zoom text-2xl hover:scale-125 ease-in duration-150"></i>
      </a>
      <a @click="HandleLinkedin">
        <i class="fa-brands fa-linkedin zoom text-2xl hover:scale-125 ease-in duration-150"></i>
      </a>
    </nav>
  </footer>
</template>
