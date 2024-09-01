import styled from "styled-components";

const ContainerCard = styled.div`
    width: ${props => props.width};
    height: 600px;
    border-radius: 12px;
    border: 1px solid black;
`

export default function Card({ titulo, filtro, tarefas, onTarefaAlterar }) {
  return (
    <ContainerCard>
      <h2>{titulo}</h2>
      {typeof filtro === 'function' ? ( //Se o filtro for uma função
        filtro().map(tarefa => (
            <div key={tarefa.id}>
                <input 
                  type="checkbox" 
                  checked={tarefa.status} 
                  onChange={() => onTarefaAlterar(tarefa.id)}
                ></input>
                <span>{tarefa.texto}</span>
            </div>
        )) 
      ) : ( //Se não 
        tarefas.map(tarefa => (
            <div key={tarefa.id}>
              <input 
                type="checkbox" 
                checked={tarefa.status} 
                onChange={() => onTarefaAlterar(tarefa.id)}
              ></input>
              <span>{tarefa.texto}</span>
            </div>
        ))
     )}
    </ContainerCard>
  );
}

/*
        if (filtro() === "undefined") {
          return tarefas.map((tarefa) => (
            <div key={tarefa.id}>
              <input type="checkbox"></input>
              <span>{tarefa.texto}</span>
            </div>
          ));
        } else {
          return filtro().map((tarefa) => (
            <div key={tarefa.id}>
              <input type="checkbox"></input>
              <span>{tarefa.texto}</span>
            </div>
          ));
        }
          */