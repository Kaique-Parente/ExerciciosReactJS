import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import styled from "styled-components";

const ContainerTask = styled.div `
    display: flex;
    gap: 50px;
`

export default function ListaTarefa(){

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
        } 
    }

    // Função para atualizar o estado quando o valor do input muda
    const handleChange = (event) => {
        setNovoTexto(event.target.value);
    }

    return(
        <>
            <Header titulo="Tarefas de Hoje" novoTexto={novoTexto} onChange={handleChange} onClick={adicionarTarefa}/>
            <ContainerTask>
                <Card titulo="Todas" marcador='t' tarefas={tarefasOrdenadas} filtro={null} onTarefaAlterar={handleTarefaAlterar}/>
                <Card titulo="Pendentes" marcador='p' tarefas={tarefas} filtro={getTarefasPendentes} onTarefaAlterar={handleTarefaAlterar}/>
                <Card titulo="Concluidas" marcador='c' tarefas={tarefas} filtro={getTarefasConcluidas}  onTarefaAlterar={handleTarefaAlterar}/>
            </ContainerTask>
 
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