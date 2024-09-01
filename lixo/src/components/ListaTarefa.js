import { useState } from "react";
import Card from "./Card";

export default function Tarefa(){

    //useState Tarefas
    const [tarefas, setTarefas] = useState([
        {
            id: 1,
            texto: "Limpar a casa",
            status: false
        },
        {
            id: 2,
            texto: "Fazer Tarefa",
            status: false
        },
        {
            id: 3,
            texto: "Arrumar computador",
            status: true
        }
    ]);

    //Função para Ordenar
    const ordenarTarefas = (tarefas) => {
        return tarefas.slice().sort((a, b) => {
            if (a.status === b.status) {
                return -1;
            }
            return a.status ? 1 : -1;
        });
    };

    //Ordenando Tarefas
    const tarefasOrdenadas = ordenarTarefas(tarefas);

    //Filtros
    const getTarefasPendentes = () => {
        return tarefas.filter(tarefa => tarefa.status === false);
    };

    const getTarefasConcluidas = () => {
        return tarefas.filter(tarefa => tarefa.status === true);
    };

    //Trocar status Checkbox
    const handleTarefaAlterar = (id) => {
        setTarefas(prevTarefas => prevTarefas.map(tarefa => tarefa.id === id
            ? {...tarefa, status: !tarefa.status}
            : tarefa
        ));
    }

    //useState Novo Texto
    const [novoTexto, setNovoTexto] = useState('');

    const obterProximoId = () => {
        const maxId = tarefas.reduce((max, tarefa) => Math.max(max, tarefa.id), 0);
        return maxId + 1;
    };

    const adicionarTarefa = () => {
        if(novoTexto.trim() === '') 
            return;
        else {
            // Criando novo Objeto
            const novaTarefa = {
                id: obterProximoId(),
                texto: novoTexto,
                status: false
            };

            // Atualiza o estado com a nova tarefa adicionada
            setTarefas([...tarefas, novaTarefa]);

            // Limpa o campo de entrada
            setNovoTexto('');
            console.log(tarefas);
        } 
    }

    // Função para atualizar o estado quando o valor do input muda
    const handleChange = (event) => {
        setNovoTexto(event.target.value);
    }

    return(
        <>
            <Card titulo="Todas" tarefas={tarefasOrdenadas} filtro={null} onTarefaAlterar={handleTarefaAlterar}/>
            <Card titulo="Pendentes" tarefas={tarefas} filtro={getTarefasPendentes} onTarefaAlterar={handleTarefaAlterar}/>
            <Card titulo="Concluidas" tarefas={tarefas} filtro={getTarefasConcluidas}  onTarefaAlterar={handleTarefaAlterar}/>
            
            <input type="text" id="inputTexto" value={novoTexto} onChange={handleChange}></input>
            <button onClick={adicionarTarefa}>dwadaw</button>
        </>
    );
};

/*export function TarefasPendentes(){
    return(
        <>
            {.map(tarefa =>(
                <div key={tarefa.id}>
                    <input type="checkbox"></input>
                    <span>{tarefa.texto}</span>
                </div>
            ))}
        </>
    );
};

export function TarefasConcluidas(){
    return(
        <>
            {tarefas.filter(tarefa => tarefa.status === 'concluida').map(tarefa =>(
                <div key={tarefa.id}>
                    <input type="checkbox"></input>
                    <span>{tarefa.texto}</span>
                </div>
            ))}
        </>
    );
};*/