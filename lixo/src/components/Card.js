import styled from "styled-components";
import Wave from "./Wave";
import excluirPNG from "../assets/images/excluir.png";
import "./Checkbox.css";

const ContainerCard = styled.div`
    max-width: ${props => props.width};
    min-height: 600px;
    word-wrap: break-word;
    
    border-radius: 12px;

    background-color: ${props => props.background === 't' ? "#145773" : props.background === 'p' ? "#755117" : "#3EBB5E"}
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
      color: #A2F2D5;
    }

    .custom-label::before {
      border: 1px solid black;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid black;
      border-radius: 4px;

      min-width: 28px;
      height: 22px;
      padding-top: 2px;

      background: red;
      cursor: pointer;
    }

    img {
      width: 14px;
    }
`

export default function Card(props) {
 
  const color = props.marcador === 't' ? "#143873" : props.marcador === 'p' ? "#754117" : "#42A33E";
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
                <button onClick={() => props.onTarefaExcluir(tarefa.id)}><img src={excluirPNG}/></button>
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
               <button onClick={() => props.onTarefaExcluir(tarefa.id)}><img src={excluirPNG}/></button>
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