import { computed, ref } from "vue"
import { estados, estadosType } from "../utils/estados"

export function useAutoComplete() {
    /**
     * variavel de input para o estado
     */
    let inputEstado = ref('')

    /**
     *  Retorna a pesquisa referenta o input do estado
     */
    const pesquisaEstado = computed(() => {

        if (inputEstado.value === '') return []

        let matches = 0

        return estados.filter(item => {
            if (item.nome.toLowerCase().includes(inputEstado.value.toLowerCase()) && matches < 10) {
                matches++
                return item
            }
        })

    })

    /**
     * Seleciona o Estado e retorna um string com o nome do estado
     * @param estado 
     * @returns String
     */
    const estadoSelecionado = (estado : estadosType): string => {
        inputEstado.value = ''
        return estado.nome
    }
    return {
        inputEstado,
        pesquisaEstado,
        estados,
        estadoSelecionado
    }
}