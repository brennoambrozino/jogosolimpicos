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
Object.defineProperty(exports, "__esModule", { value: true });
class RankingBusiness {
    constructor(resultadoData, competicaoData) {
        this.resultadoData = resultadoData;
        this.competicaoData = competicaoData;
        this.get = (input) => __awaiter(this, void 0, void 0, function* () {
            const { competicao } = input;
            if (!competicao) {
                throw new Error("Campos Inválidos");
            }
            const queryResult = yield this.competicaoData.selectId(competicao.toUpperCase());
            const competicao_id = queryResult.id;
            let order = 'DESC';
            const modalidade = yield this.competicaoData.selectModalidade(competicao_id);
            if (modalidade.modalidade === '100M_RASOS') {
                order = 'ASC';
            }
            const resultados = yield this.resultadoData.selectCompeticaoId(competicao_id, order);
            return resultados;
        });
    }
}
exports.default = RankingBusiness;
//# sourceMappingURL=RankingBusiness.js.map