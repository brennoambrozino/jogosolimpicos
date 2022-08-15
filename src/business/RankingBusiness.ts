import CompeticaoData from "../data/CompeticaoData"
import ResultadoData from "../data/ResultadoData"
import { getRankingDTO } from "../types/GetRankingDTO"

export default class RankingBusiness {
    constructor(
        private resultadoData: ResultadoData,
        private competicaoData: CompeticaoData
    ){}

    get = async(input:getRankingDTO) => {
        const { competicao } = input

        if(!competicao) {
            throw new Error("Campos Inválidos")
        }

        const queryResult:any = await this.competicaoData.selectId(competicao.toUpperCase()) 
        const competicao_id:string = queryResult.id

        let order = 'DESC'
        const modalidade = await this.competicaoData.selectModalidade(competicao_id)
        
        if(modalidade.modalidade === '100M_RASOS') {
            order = 'ASC'
        } 

        const resultados = await this.resultadoData.selectCompeticaoId(competicao_id, order)

        return resultados
    }
}