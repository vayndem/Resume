<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="navbar bg-opacity-70 backdrop-blur-md">
    <div class="flex-1">
      <router-link class="btn btn-ghost text-xl" to="/">Haikal Abror</router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>More</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li v-if="route.path !== '/'">
                <router-link to="/">Home</router-link>
              </li>
              <li v-if="route.path !== '/timeline'">
                <router-link to="/timeline">Timeline</router-link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
