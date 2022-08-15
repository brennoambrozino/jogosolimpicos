import CompeticaoData from "../data/CompeticaoData"
import Competicao from "../model/Competicao"
import { IdGenerator } from "../services/IdGenerator"
import { COMPETICAO_MODALIDADES } from "../types/COMPETICAO_MODALIDADES"
import { COMPETICAO_STATUS } from "../types/COMPETICAO_STATUS"
import { createCompeticaoDTO } from "../types/CreateCompeticaoDTO"
import { finishCompeticaoDTO } from "../types/FinishCompeticaoDTO"

export default class CompeticaoBusiness {
    constructor(
        private competicaoData: CompeticaoData,
        private idGenerator: IdGenerator
    ){}

    create = async(input:createCompeticaoDTO) => {
        const {name, modalidade} = input

        if(!name || !modalidade ) {
            throw new Error("Campos Inválidos")
        }

        if(modalidade !== COMPETICAO_MODALIDADES.CEM && modalidade !== COMPETICAO_MODALIDADES.DARDO ){
            throw new Error("As modalidades disponíveis são: '100M_RASOS' e 'LANCAMENTO_DE_DARDO' ")
        }

        const id:string = this.idGenerator.generateId()

        const competicao = new Competicao(
            id,
            name.toUpperCase(),
            modalidade
        )

        await this.competicaoData.insert(competicao)
    }

    finish = async(input:finishCompeticaoDTO) => {
        const {competicao} = input

        if(!competicao) {
            throw new Error("Campos inválidos")
        }

        const queryResult:any = await this.competicaoData.selectId(competicao.toUpperCase()) 
        const competicao_id:string = queryResult.id

        await this.competicaoData.updateStatus(competicao_id)
    }
}