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
const Competicao_1 = __importDefault(require("../model/Competicao"));
const COMPETICAO_MODALIDADES_1 = require("../types/COMPETICAO_MODALIDADES");
class CompeticaoBusiness {
    constructor(competicaoData, idGenerator) {
        this.competicaoData = competicaoData;
        this.idGenerator = idGenerator;
        this.create = (input) => __awaiter(this, void 0, void 0, function* () {
            const { name, modalidade } = input;
            if (!name || !modalidade) {
                throw new Error("Campos Inválidos");
            }
            if (modalidade !== COMPETICAO_MODALIDADES_1.COMPETICAO_MODALIDADES.CEM && modalidade !== COMPETICAO_MODALIDADES_1.COMPETICAO_MODALIDADES.DARDO) {
                throw new Error("As modalidades disponíveis são: '100M_RASOS' e 'LANCAMENTO_DE_DARDO' ");
            }
            const id = this.idGenerator.generateId();
            const competicao = new Competicao_1.default(id, name.toUpperCase(), modalidade);
            yield this.competicaoData.insert(competicao);
        });
        this.finish = (input) => __awaiter(this, void 0, void 0, function* () {
            const { competicao } = input;
            if (!competicao) {
                throw new Error("Campos inválidos");
            }
            const queryResult = yield this.competicaoData.selectId(competicao.toUpperCase());
            const competicao_id = queryResult.id;
            yield this.competicaoData.updateStatus(competicao_id);
        });
    }
}
exports.default = CompeticaoBusiness;
//# sourceMappingURL=CompeticaoBusiness.js.map