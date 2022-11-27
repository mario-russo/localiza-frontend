import { defineStore } from "pinia"
import { computed, reactive } from "vue"
import { Patrimonio } from "../type"

export const useTombamento = defineStore('counter', () => {
    const usepatrimonio: Patrimonio[] = reactive([
        {
            estado: 'acre',
            municipio:'xapuri',
            nome: 'casa de chico mendes',
            tipologia: 'edificação',
            ano:'2011',
            descricao: 'Casa histórica onde residiu o ambientalista Chico Mendes em seus últimos anos de vida, também local de seu assassinato. Abriga, desde o fim da década de 1990, uma sala de memória em homenagem ao antigo proprietário'
        },
        {
            estado: 'alagoas',
            municipio:'marechal deodoro',
            nome: 'Marechal Deodoro',
            tipologia: 'Conjunto urbano',
            ano:'2009',
            descricao: 'Conjunto urbano de importância histórica, arquitetônica e paisagística. A área definida para proteção envolve três locais descontinuados: o Centro Histórico, a área do Carmo e a área de Taperagua'
        },
        {
            estado: 'alagoas',
            municipio:'marechal deodoro',
            nome: 'igreja de são francisco',
            tipologia: 'Edificação',
            ano:'1964',
            descricao: 'A construção do convento foi iniciada em 1684 e concluída em 1723. Anexa ao convento, a Igreja de Ordem Terceira de São Francisco começou a ser erguida na segunda metade do século XVIII. Abrigou no passado o Orfanato São José, posteriormente transferido para uma edificação contígua, e sedia, desde 1984, o Museu de Arte Sacra do Estado de Alagoas. O tombamento incide sobre todo o seu acervo.'
        },
        {
            estado: 'amapá',
            municipio:'macapá',
            nome: ' fortaleza de são josé do macapá',
            tipologia: 'edificação',
            ano:'1950',
            descricao: 'A construção da fortaleza foi iniciada em 1764, no mesmo local onde se havia erguido a fortificação primitiva de 1738, e concluída em 1782. Abriga atualmente o Museu Fortaleza de São José de Macapá'
         },
        {
            estado: 'amazonas',
            municipio:'manaus',
            nome: 'porto de manaus',
            tipologia: 'conjunto arquitetônica',
            ano:'1987',
            descricao: 'O conjunto arquitetônico do Porto de Manaus começou a ser erguido no começo do século XX, com a finalidade de escoar a produção de borracha. O tombamento incide sobre diversas edificações, três delas anteriores à construção do conjunto: o edifício do Tesouro Público (1887-1890), o trapiche Princesa Isabel (1888) e a bomba de incêndio (1869-1881).'
         },
    ])
    
    function patrimonioPorEstado( estado: string): Patrimonio[]{
       let resultado = usepatrimonio.filter(item=>{
        if(estado === item.estado || estado === item.municipio){
            return item
        }
       })
       return resultado
    }

    return { usepatrimonio, patrimonioPorEstado}
})