import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefa";
import TipoFiltro from "../model/TipoFiltro";

const tarefasIniciais: Tarefa[] = [
    Tarefa.criarAtiva(1, 'Estudar Next'),
     Tarefa.criarConcluida(2, 'Limpar carro'),
     Tarefa.criarAtiva(3, 'Comprar livro do mês'),
     Tarefa.criarAtiva(4, 'Dar banho na Docinho'),
]

export default new ListaTarefas(tarefasIniciais, TipoFiltro.NENHUM)