"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resultado_1 = __importDefault(require("../model/Resultado"));
class ResultadoBusiness {
    constructor(resultadoData, idGenerator, competicaoData) {
        this.resultadoData = resultadoData;
        this.idGenerator = idGenerator;
        this.competicaoData = competicaoData;
        this.register = (input) => __awaiter(this, void 0, void 0, function* () {
            const { competicao, atleta, value, unidade } = input;
            if (!competicao || !atleta || !value || !unidade) {
                throw new Error("Campos Inválidos");
            }
            const queryResult = yield this.competicaoData.selectId(competicao.toUpperCase());
            const competicao_id = queryResult.id;
            const status_competicao = yield this.competicaoData.selectStatus(competicao_id);
            if (status_competicao.status === "FINALIZADA") {
                throw new Error("Essa competição não pode recbber novos resultados, pois já foi encerrada");
            }
            const id = this.idGenerator.generateId();
            const resultado = new Resultado_1.default(id, competicao_id, atleta, value, unidade);
            yield this.resultadoData.insert(resultado);
        });
    }
}
exports.default = ResultadoBusiness;
//# sourceMappingURL=ResultadoBusiness.js.map