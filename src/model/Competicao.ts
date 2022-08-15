import { COMPETICAO_MODALIDADES } from "../types/COMPETICAO_MODALIDADES";
import { COMPETICAO_STATUS } from "../types/COMPETICAO_STATUS";

export default class Competicao{
    constructor(
        private id:string,
        private name:string,
        private modalidade:COMPETICAO_MODALIDADES
    ){}
}