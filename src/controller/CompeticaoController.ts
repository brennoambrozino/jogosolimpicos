import { Request, Response } from "express";
import CompeticaoBusiness from "../business/CompeticaoBusiness";
import { createCompeticaoDTO } from "../types/CreateCompeticaoDTO";
import { finishCompeticaoDTO } from "../types/FinishCompeticaoDTO";

export default class CompeticaoController {

    constructor(
        private CompeticaoBusiness: CompeticaoBusiness
    ){}

    create = async(req:Request, res:Response) => {
        const { name, modalidade} = req.body
        const input: createCompeticaoDTO = {
            name,
            modalidade
        }

        try {
            await this.CompeticaoBusiness.create(input)
            res.status(201).send({message: 'Competição criada com sucesso'})
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro na criação da Competição")
        }
    }

    finish = async(req:Request, res:Response) => {
        const { competicao } = req.body
        const input: finishCompeticaoDTO = {
            competicao
        }

        try {
            await this.CompeticaoBusiness.finish(input)
            res.status(200).send({message: 'Competição finalizada com sucesso'})
            
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro na Finalização da Competiçaõ")
        }
    }


}