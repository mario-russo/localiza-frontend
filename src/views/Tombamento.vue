<script setup lang="ts">

import { onMounted, onUpdated, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

import { QInput, QBtn, QCard, QCardSection } from 'quasar';

import { useTombamento } from '../store/Tombamento';
import { Patrimonio } from '../type';
import { transformaUrl, transformaUrlParaString } from '../utils';
import { useAutoComplete } from '../composable/useAutoComplete';
import { estadosType } from '../utils/estados';


type patrimonioType = Patrimonio
const { usepatrimonio, patrimonioPorEstado } = useTombamento()
const { estados, inputEstado, pesquisaEstado, estadoSelecionado } = useAutoComplete()

const router = useRoute()
const routers = useRouter()

let parametro = ref(router.params.estado.toString())

const url: string = transformaUrlParaString(parametro.value)

let lista = ref<patrimonioType[]>([])

let patrimonioInput = ref(inputEstado)


function listaPatrimonio() {
    routers.push('/tombamentos/' + transformaUrl(patrimonioInput.value))
    lista.value = patrimonioPorEstado(patrimonioInput.value.toLowerCase())
    if (inputEstado) {
        inputEstado.value = ''
    }
}

function listandoEstado(item: estadosType) {
    patrimonioInput.value = estadoSelecionado(item)
    listaPatrimonio()
    inputEstado.value = ''
}

onMounted(() => {
    if (url) {
        lista.value = patrimonioPorEstado(url)
    }
})

</script>
<template>
    <div class="center">
        <section class="flex">
            <div class="pesquisa">
                <q-input v-model="inputEstado" @keyup.enter="listaPatrimonio()" bottom-slots label="Pesquisar Por Estado" class="ipt">
                </q-input>
                <q-btn @click="listaPatrimonio" flat round color="primary" icon="search" class="btn-pesquisa" />

            </div>

            <ul v-if="pesquisaEstado.length" class="auto-complete">
                <li v-for="(item, index) in pesquisaEstado" @click="(listandoEstado(item))"> {{ item.nome }}</li>
            </ul>

            <div v-if="lista.length > 0">
                <template v-for="(item, index) in lista" :key="index">
                    <div class="q-pa-md texto">
                        <q-card class="my-card">
                            <q-card-section>
                                <div class="text-h6">{{ item.nome }}</div>
                                <div class="text-subtitle2">{{ item.municipio }} | {{ item.ano }} | {{
                                        item.tipologia
                                }}</div>
                            </q-card-section>

                            <q-card-section class="q-pt-none">
                                {{ item.descricao }}
                            </q-card-section>
                        </q-card>
                    </div>
                </template>
            </div>
            <div v-else>
                <template v-for="(item, index) in usepatrimonio" :key="index">
                    <div class="q-pa-md texto">
                        <q-card class="my-card">
                            <q-card-section>
                                <div class="text-h6">{{ item.nome }}</div>
                                <div class="text-subtitle2">{{ item.municipio }} | {{ item.ano }} | {{
                                        item.tipologia
                                }}
                                </div>
                            </q-card-section>

                            <q-card-section class="q-pt-none">
                                {{ item.descricao }}
                            </q-card-section>
                        </q-card>
                    </div>
                </template>
            </div>
        </section>
    </div>
</template>
<style scoped>
.center {
    margin: 30px auto;
    width: 90%;
}

.flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.pesquisa {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    margin-left: 18px;
}

.ipt {
    width: 80%;
}

.texto {
    text-align: left;
}

.btn-pesquisa {
    height: 20px;
    width: 20px;

}

.auto-complete {
    background-color: rgb(255, 255, 255);
    width: 25%;
    position: relative;
    z-index: 1;
    width: 80%;
    color: rgb(121, 121, 121);
    margin-left: 18px;
    border-bottom: 1px solid;
    border-left: 1px solid;
}

.auto-complete li {
    margin-left: 0;
    list-style-type: none;
    padding: 5px;
    height: 25px;
    cursor: pointer;
    margin: 2px;
    text-align: left;
}

.auto-complete li:hover {
    font-weight: 700;
}
</style>