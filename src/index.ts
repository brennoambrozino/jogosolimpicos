import CompeticaoBusiness from "./business/CompeticaoBusiness"
import RankingBusiness from "./business/RankingBusiness"
import ResultadoBusiness from "./business/ResultadoBusiness"
import { app } from "./controller/app"
import CompeticaoController from "./controller/CompeticaoController"
import RankingController from "./controller/RankingController"
import ResultadoController from "./controller/ResultadoController"
import CompeticaoData from "./data/CompeticaoData"
import ResultadoData from "./data/ResultadoData"
import { IdGenerator } from "./services/IdGenerator"


const resultadoBusiness = new ResultadoBusiness(
    new ResultadoData(),
    new IdGenerator(),
    new CompeticaoData()
)

const resultadoController = new ResultadoController(
    resultadoBusiness
)

app.post("/resultado/register", resultadoController.register)



const competicaoBusiness = new CompeticaoBusiness(
    new CompeticaoData(),
    new IdGenerator()
)

const competicaoController = new CompeticaoController(
    competicaoBusiness
)

app.post("/competicao/create", competicaoController.create)
app.put("/competicao/finish", competicaoController.finish)


const rankingBusiness = new RankingBusiness(
    new ResultadoData(),
    new CompeticaoData()
)

const rankingController = new RankingController(
    rankingBusiness
)

app.get("/ranking/:competicao", rankingController.get)