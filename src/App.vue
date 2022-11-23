<script setup lang="ts">
import Navbar from './components/Navbar.vue';


</script>

<template>
  <div>
    <nav>
      <Navbar></Navbar>
    </nav>
    <section class="q-p-0">
      <router-view></router-view>
    </section>
  </div>



</template>

<style scoped>

</style>
