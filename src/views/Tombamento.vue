<script setup lang="ts">
import { QInput, QBtn } from 'quasar';
import { ref } from 'vue';
import { useTombamento } from '../store/Tombamento'
import { Patrimonio } from '../type';

type patrimonioType = Patrimonio
const { usepatrimonio, patrimonioPorEstado } = useTombamento()

let lista = ref<patrimonioType[]>([])
const patrimonioInput = ref('')
function listaPatrimonio() {
    lista.value = patrimonioPorEstado(patrimonioInput.value)
}
</script>
<template>
    <div class="center">
        <section class="flex">
            <div class="pesquisa">
                <q-input v-model="patrimonioInput" bottom-slots label="Pesquisar Por Estado" class="ipt">
                </q-input>
                <q-btn @click="listaPatrimonio" flat round color="primary" icon="search" class="btn-pesquisa" />

            </div>
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
    /* background-color: rgba(0, 0, 0, 0.26); */
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
</style>