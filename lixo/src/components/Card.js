import styled from "styled-components";
import Wave from "./Wave";

const ContainerCard = styled.div`
    width: ${props => props.width};
    height: 600px;
    border-radius: 12px;
    border: 1px solid black;
`

export default function Card(props) {
 
  
  const color = props.tarefas.status == true ? "green" : "red";
  const tamanhoH = 400;

  return (
    <ContainerCard width={tamanhoH+"px"}>
      <Wave width={tamanhoH+"px"} color={color} texto={props.titulo}/>
      <h2>{props.titulo}</h2>
      {typeof props.filtro === 'function' ? ( //Se o props.filtro for uma função
        props.filtro().map(tarefa => (
            <div key={tarefa.id}>
                <input 
                  type="checkbox" 
                  checked={tarefa.status} 
                  onChange={() => props.onTarefaAlterar(tarefa.id)}
                ></input>
                <span>{tarefa.texto}</span>
            </div>
        )) 
      ) : ( //Se não 
        props.tarefas.map(tarefa => (
            <div key={tarefa.id}>
              <input 
                type="checkbox" 
                checked={tarefa.status} 
                onChange={() => props.onTarefaAlterar(tarefa.id)}
              ></input>
              <span>{tarefa.texto}</span>
            </div>
        ))
     )}
    </ContainerCard>
  );
}

/*
        if (props.filtro() === "undefined") {
          return props.tarefas.map((tarefa) => (
            <div key={tarefa.id}>
              <input type="checkbox"></input>
              <span>{tarefa.texto}</span>
            </div>
          ));
        } else {
          return props.filtro().map((tarefa) => (
            <div key={tarefa.id}>
              <input type="checkbox"></input>
              <span>{tarefa.texto}</span>
            </div>
          ));
        }
          */