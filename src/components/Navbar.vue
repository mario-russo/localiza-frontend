<script setup lang="ts">
import { ref } from 'vue'

const leftDrawerOpen = ref(true)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}


</script>
<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-primary glossy text-white">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <!-- <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
              </q-avatar> -->

      <q-toolbar-title>Agenda</q-toolbar-title>

      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
  </div>
</template>
  