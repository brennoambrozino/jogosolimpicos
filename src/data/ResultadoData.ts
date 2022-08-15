import Resultado from "../model/Resultado"
import { selectCompeticaoIdResponse } from "../types/SelectCompeticaoIdResponse"
import { BaseDataBase } from "./BaseDataBase"

export default class ResultadoData extends BaseDataBase{
    protected TABLE_NAME = "JOGOS_OLIMPICOS_RESULTADOS"

    insert = async (resultado: Resultado) => {
        try {
            await this
            .connection(this.TABLE_NAME)
            .insert(resultado)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Error do banco !")
            }
        }
    }

    selectCompeticaoId = async(competicao_id: string, order:string) => {
        try {
            const queryResult:selectCompeticaoIdResponse = await this
            .connection(this.TABLE_NAME)
            .select("atleta", "value", "unidade")
            .where({competicao_id})
            .orderBy("value", `${order}`)

            return queryResult
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Error do banco !")
            }
        }
    }
    
}