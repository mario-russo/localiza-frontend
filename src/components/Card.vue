<template>
    <div class="q-pa-md" v-for="(item, index) in links" :key="index">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">{{item.nome}}</div>
            <div class="text-subtitle2">{{item.local}}</div>
          </q-card-section>
    
          
    
          <q-separator />
    
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="one" >
              {{item.site}}
            </q-tab-panel>
           
          </q-tab-panels>
        </q-card>
      </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('one')
const links = [
  {nome: 'Analista de Sistemas', local:'rio de janeiro', site:'www.alguma coisa', modo:'On-lines' },
  {nome: 'Programador C#', local:'São Paulo', site:'www.alguma coisa', modo:'On-lines' },
  {nome: 'vaga desenvolvedor', local:'Brasil', site:'www.alguam coisa', modo:'On-lines' }
]
</script>