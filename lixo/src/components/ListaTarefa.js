import { useState } from "react";
import Card from "./Card";

export default function Tarefa(){

    //useState
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

    return(
        <>
            <Card titulo="Todas" tarefas = {tarefas} filtro={null} onTarefaAlterar={handleTarefaAlterar}/>
            <Card titulo="Pendente" filtro={getTarefasPendentes} onTarefaAlterar={handleTarefaAlterar}/>
            <Card titulo="Concluidas" filtro={getTarefasConcluidas}  onTarefaAlterar={handleTarefaAlterar}/>
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