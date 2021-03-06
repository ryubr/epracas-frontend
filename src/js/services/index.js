import angular from "angular"

import UserService from "./user.service"
import JwtService from "./jwt.service"
import PracaService from "./praca.service"
import GestorService from "./gestor.service"
import ErrorCatcherService from "./errorcatcher.service"
import AtividadeService from "./atividade.service"
import VinculacaoService from "./vinculacao.service"
import ToastService from "./toast.service"
import GrupoGestorService from "./grupogestor.service"
import UnidadeGestoraService from "./unidadegestora.service"
import RecursoHumanoService from "./rh.service"
import AtoresService from "./atores.service"

// Create the module where our functionality can attach to
const servicesModule = angular.module("app.services", [])

.service("User", UserService)
.service("JWT", JwtService)
.service("Praca", PracaService)
.service("Gestor", GestorService)
.service("ErrorCatcher", ErrorCatcherService)
.service("Atividade", AtividadeService)
.service("Vinculacao", VinculacaoService)
.service("Toast", ToastService)
.service("GrupoGestor", GrupoGestorService)
.service("UnidadeGestora", UnidadeGestoraService)
.service("RecursoHumano", RecursoHumanoService)
.service("Atores", AtoresService)

export default servicesModule
