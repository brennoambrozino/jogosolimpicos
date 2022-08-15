import { Request, Response } from "express"
import ResultadoBusiness from "../business/ResultadoBusiness"
import { registerResultadoDTO } from "../types/RegisterResultadoDTO"

export default class ResultadoController {

    constructor(
        private ResultadoBusiness: ResultadoBusiness
    ){}

    register = async(req:Request, res:Response) => {
        const { competicao, atleta, value, unidade } = req.body
        const input: registerResultadoDTO = {
            competicao,
            atleta,
            value,
            unidade
        }

        try {
            await this.ResultadoBusiness.register(input)
            res.status(201).send({message: 'Resultado Registrado com sucesso'})
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no Registro do Resultado")
        }
    }
}