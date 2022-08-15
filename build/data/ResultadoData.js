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
const BaseDataBase_1 = require("./BaseDataBase");
class ResultadoData extends BaseDataBase_1.BaseDataBase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = "JOGOS_OLIMPICOS_RESULTADOS";
        this.insert = (resultado) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this
                    .connection(this.TABLE_NAME)
                    .insert(resultado);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Error do banco !");
                }
            }
        });
        this.selectCompeticaoId = (competicao_id, order) => __awaiter(this, void 0, void 0, function* () {
            try {
                const queryResult = yield this
                    .connection(this.TABLE_NAME)
                    .select("atleta", "value", "unidade")
                    .where({ competicao_id })
                    .orderBy("value", `${order}`);
                return queryResult;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Error do banco !");
                }
            }
        });
    }
}
exports.default = ResultadoData;
//# sourceMappingURL=ResultadoData.js.map