export default class Resultado{
    constructor(
        private id:string,
        private competicao_id:string,
        private atleta:string,
        private value: number,
        private unidade: string
    ){}
}