import { computed, ref } from "vue"
import { estados, estadosType } from "../utils/estados"

export function useAutoComplete() {
    let inputEstado = ref('')

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