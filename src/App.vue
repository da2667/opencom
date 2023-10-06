<template>
  <nav v-for="route, idx in routes" :key="idx">
    <router-link :to="`/${route}`">{{ route }}</router-link> |
  </nav>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "App",
  data() {
    return {
      routes: ["Home", "Discussion", "Friends"] as string[]
    }
  }
})
</script>

<style>

</style>
