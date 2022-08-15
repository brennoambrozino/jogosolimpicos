import Competicao from "../model/Competicao"
import { selectIdResponse } from "../types/SelectIdResponse"
import { selectModalidadeResponse } from "../types/SelectModalidadeResponse"
import { selectStatusResponse } from "../types/SelectStatusResponse"
import { BaseDataBase } from "./BaseDataBase"

export default class CompeticaoData extends BaseDataBase{
    protected TABLE_NAME = "JOGOS_OLIMPICOS_COMPETICOES"

    insert = async (competicao: Competicao) => {
        try {
            await this
            .connection(this.TABLE_NAME)
            .insert(competicao)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Error do banco !")
            }
        }
    }

    selectId = async(name:string) => {
        try {
            const queryResult:selectIdResponse = await this
            .connection(this.TABLE_NAME)
            .select("id")
            .where({name})
            return queryResult[0]

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Error do banco !")
            }
        }
    }

    updateStatus = async(id:string) => {
        try {
            await this
            .connection(this.TABLE_NAME)
            .update({status: "FINALIZADA"})
            .where({id})
            
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Error do banco !")
            }
        }
    }

    selectModalidade = async(id:string) => {
        try {
            const queryResult:selectModalidadeResponse = await this
            .connection(this.TABLE_NAME)
            .select("modalidade")
            .where({id})

            return queryResult[0]
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Error do banco !")
            }
        }
    } 
    
    selectStatus = async(id:string) => {
        try {
            const queryResult:selectStatusResponse = await this
            .connection(this.TABLE_NAME)
            .select("status")
            .where({id})

            return queryResult[0]
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Error do banco !")
            }
        }
    }

}