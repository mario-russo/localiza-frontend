<script setup lang="ts">
import { useTombamento } from '../store/Tombamento'
const {patrimonio} = useTombamento()
</script>
<template>
    <div>
       <p v-for="(item, index) in patrimonio" :key="index"> {{item.nome}}</p>
    </div>
</template>