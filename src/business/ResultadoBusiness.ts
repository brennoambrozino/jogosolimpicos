import CompeticaoData from "../data/CompeticaoData"
import ResultadoData from "../data/ResultadoData"
import Resultado from "../model/Resultado"
import { IdGenerator } from "../services/IdGenerator"
import { registerResultadoDTO } from "../types/RegisterResultadoDTO"
import { selectIdResponse } from "../types/SelectIdResponse"

export default class ResultadoBusiness {
    constructor(
        private resultadoData: ResultadoData,
        private idGenerator: IdGenerator,
        private competicaoData: CompeticaoData
    ){}

    register = async(input:registerResultadoDTO) => {
        const { competicao, atleta, value, unidade } = input

        if(!competicao || !atleta || !value || !unidade) {
            throw new Error("Campos Inválidos")
        }

        const queryResult:any = await this.competicaoData.selectId(competicao.toUpperCase()) 
        const competicao_id:string = queryResult.id

        const status_competicao = await this.competicaoData.selectStatus(competicao_id)

        if(status_competicao.status === "FINALIZADA") {
            throw new Error("Essa competição não pode recbber novos resultados, pois já foi encerrada")
        }

        const id:string = this.idGenerator.generateId()

        const resultado = new Resultado(
            id,
            competicao_id,
            atleta,
            value,
            unidade
        )

        await this.resultadoData.insert(resultado)
    }
}
