import styled from "styled-components";
import Wave from "./Wave";
import "./Checkbox.css";

const ContainerCard = styled.div`
    max-width: ${props => props.width};
    min-height: 600px;
    word-wrap: break-word;
    
    border-radius: 12px;
    border: 1px solid black;

    background-color: ${props => props.background === 't' ? "rgb(0 86 179 / 28%)" : props.background === 'p' ? "rgb(220 53 69 / 60%)" : "rgb(30 126 52 / 45%)"}
`

const ContainerTextTask = styled.div `
    margin: 20px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
      display: flex;
      gap: 10px;
      align-items: center;
      overflow-wrap: anywhere;
    }

    label {
      font-size: 20px;
    }
`

export default function Card(props) {
 
  const color = props.marcador === 't' ? "#0056b3" : props.marcador === 'p' ? "#dc3545" : "#1e7e34";
  const tamanhoH = 400;

  return (
    <ContainerCard width={tamanhoH+"px"} color={color} background={props.marcador}>
      <Wave width={tamanhoH+"px"} color={color} texto={props.titulo}/>
      <ContainerTextTask>
        {typeof props.filtro === 'function' ? ( //Se o props.filtro for uma função
        props.filtro().map(tarefa => (
            <div key={tarefa.id}>
                <input 
                  type="checkbox" 
                  checked={tarefa.status} 
                  onChange={() => props.onTarefaAlterar(tarefa.id)}
                  id={"customCheckbox" + tarefa.id}
                  className="custom-checkbox"
                ></input>
                <label className="custom-label" htmlFor={"customCheckbox" + tarefa.id}>{tarefa.texto}</label>
            </div>
        )) 
        ) : ( //Se não 
        props.tarefas.map(tarefa => (
            <div key={tarefa.id}>
              <input 
                type="checkbox" 
                checked={tarefa.status} 
                onChange={() => props.onTarefaAlterar(tarefa.id)}
                id={"customCheckbox" + tarefa.id}
                className="custom-checkbox"
              ></input>
               <label className="custom-label" htmlFor={"customCheckbox" + tarefa.id}>{tarefa.texto}</label>
            </div>
        ))
        )}
     </ContainerTextTask>
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