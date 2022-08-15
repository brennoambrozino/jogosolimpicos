"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompeticaoBusiness_1 = __importDefault(require("./business/CompeticaoBusiness"));
const RankingBusiness_1 = __importDefault(require("./business/RankingBusiness"));
const ResultadoBusiness_1 = __importDefault(require("./business/ResultadoBusiness"));
const app_1 = require("./controller/app");
const CompeticaoController_1 = __importDefault(require("./controller/CompeticaoController"));
const RankingController_1 = __importDefault(require("./controller/RankingController"));
const ResultadoController_1 = __importDefault(require("./controller/ResultadoController"));
const CompeticaoData_1 = __importDefault(require("./data/CompeticaoData"));
const ResultadoData_1 = __importDefault(require("./data/ResultadoData"));
const IdGenerator_1 = require("./services/IdGenerator");
const resultadoBusiness = new ResultadoBusiness_1.default(new ResultadoData_1.default(), new IdGenerator_1.IdGenerator(), new CompeticaoData_1.default());
const resultadoController = new ResultadoController_1.default(resultadoBusiness);
app_1.app.post("/resultado/register", resultadoController.register);
const competicaoBusiness = new CompeticaoBusiness_1.default(new CompeticaoData_1.default(), new IdGenerator_1.IdGenerator());
const competicaoController = new CompeticaoController_1.default(competicaoBusiness);
app_1.app.post("/competicao/create", competicaoController.create);
app_1.app.put("/competicao/finish", competicaoController.finish);
const rankingBusiness = new RankingBusiness_1.default(new ResultadoData_1.default(), new CompeticaoData_1.default());
const rankingController = new RankingController_1.default(rankingBusiness);
app_1.app.get("/ranking/:competicao", rankingController.get);
//# sourceMappingURL=index.js.map