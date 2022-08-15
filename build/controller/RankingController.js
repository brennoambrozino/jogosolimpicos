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
class RankingController {
    constructor(RankingBusiness) {
        this.RankingBusiness = RankingBusiness;
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { competicao } = req.params;
            const input = {
                competicao
            };
            const ranking = yield this.RankingBusiness.get(input);
            try {
                res.status(200).send({ ranking });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(400).send(error.message);
                }
                res.status(500).send("Erro ao requisitar o ranking");
            }
        });
    }
}
exports.default = RankingController;
//# sourceMappingURL=RankingController.js.map