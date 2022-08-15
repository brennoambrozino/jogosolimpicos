import { Request, Response } from "express"
import RankingBusiness from "../business/RankingBusiness"
import { getRankingDTO } from "../types/GetRankingDTO"

export default class RankingController {

    constructor(
        private RankingBusiness: RankingBusiness
    ){}

    get = async(req:Request, res:Response) => {
        const { competicao } = req.params

        const input: getRankingDTO = {
            competicao
        }

        const ranking = await this.RankingBusiness.get(input)

        try {
            res.status(200).send({ranking})
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao requisitar o ranking")
        }
    }
}