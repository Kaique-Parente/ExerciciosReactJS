import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import styled from "styled-components";

const ContainerTask = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;

    @media (max-width: 768px){
        gap: 25px;
    }
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
            texto: "Fazer Trabalho",
            status: false
        },
        {
            id: 3,
            texto: "Arrumar cores do site",
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

    const excluirTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    }

    // Função para atualizar o estado quando o valor do input muda
    const handleChange = (event) => {
        setNovoTexto(event.target.value);
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            adicionarTarefa();
        }   
    }

    return(
        <>
            <Header 
                titulo="Tarefas de Hoje" 
                novoTexto={novoTexto} 
                onChange={handleChange} 
                onKeyDown={handleKeyDown}
                onClick={adicionarTarefa}
            />
            <ContainerTask>
                <Card titulo="Todas" marcador='t' tarefas={tarefasOrdenadas} filtro={null} onTarefaAlterar={handleTarefaAlterar} onTarefaExcluir={excluirTarefa}/>
                <Card titulo="Pendentes" marcador='p' tarefas={tarefas} filtro={getTarefasPendentes} onTarefaAlterar={handleTarefaAlterar} onTarefaExcluir={excluirTarefa}/>
                <Card titulo="Concluidas" marcador='c' tarefas={tarefas} filtro={getTarefasConcluidas} onTarefaAlterar={handleTarefaAlterar} onTarefaExcluir={excluirTarefa}/>
            </ContainerTask>
 
        </>
    );
};

/*
export function TarefasPendentes(){
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
};
*/