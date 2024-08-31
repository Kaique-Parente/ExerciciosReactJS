import styled from "styled-components";
import Wave from "./Wave";

import { useState } from "react";

const ContainerCard = styled.div`
    width: ${props => props.width};
    height: 600px;
    border-radius: 12px;
    border: 1px solid black;
`

const Tarefa = ({tarefa, onAlterar}) => {
    return(
        <>
            <input 
                type="checkbox"
                checked={tarefa.status}
                onChange={() => onAlterar(tarefa.id)}
            />
            <span>{tarefa.texto}</span>
        </>
    );
}
/*
const ListaTarefa = () => {
    const [tarefas, definirTarefas] = useState([
        {id: 1, texto: "Lavar o carro", status: false},
        {id: 2, texto: "Escrever Roteiro", status: false},
        {id: 3, texto: "Testar Programa", status: false},
    ]);

    const trocarStatusTarefa = (taskID) => {
        definirTarefas(tarefas.map(tarefa => tarefa.id === taskID
            ? {...tarefa, status: !tarefa.status } : tarefa
        ));
    };

    const [novoTexto, setNovoTexto] = useState("");
    const [novoId, setNovoId] = useState(4);
    const adicionarTarefa = () => {
        if(novoTexto.trim()){
            definirTarefas([
                ...tarefas,
                {id: novoId, texto: novoTexto, status:false}
            ]);
            setNovoTexto("");
            setNovoId(novoId + 1);
        }
    }

    return(
        <>
            <h1>dwadaw</h1>
            <div>
                <input 
                    type="text" 
                    value={novoTexto} 
                    onChange={(e) => setNovoTexto(e.target.value)}
                    placeholder="Digite uma nova Tarefa:    "
                    />
                <button onClick={adicionarTarefa}>Adicionar</button>
                {console.log(tarefas)}
            </div>
            {tarefas.map(tarefa => (
                <Tarefa key={tarefa.id} tarefa={tarefa} onAlterar={trocarStatusTarefa}></Tarefa>
            ))}
        </>
    );
}

export default ListaTarefa;

/*
export default function Card(props){
    const color = props.status == true ? "green" : "red";
    const tamanhoH = 400;
    return(
        <ContainerCard width={tamanhoH+"px"}>
            <Wave width={tamanhoH+"px"} color={color} texto={props.texto}/>
            <ul id={"tarefas" + props.texto}>
                <li>a</li>
                <li>dada</li>
                <li>daa</li>
                <li>ada</li>
                <li>adad</li>
            </ul>
        </ContainerCard>
    );
}
    */