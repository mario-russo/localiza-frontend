import { defineStore } from "pinia"
import { ref } from "vue"

export const useTombamento = defineStore('counter', () => {
    const patrimonio = ref([
        {nome:'1. Ouro Preto (MG)'},
        {nome:'Centro histórico de Olinda (PE)'},
        {nome:'Centro histórico de Olinda (PE)'},
        {nome:'Ruínas de São Miguel das Missões (RS)'},
        {nome:'Centro histórico de Salvador (BA)'},
    ])
  
    return { patrimonio }
  })