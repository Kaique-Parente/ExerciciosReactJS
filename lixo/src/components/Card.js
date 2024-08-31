export default function Card({ titulo, filtro, tarefas, onTarefaAlterar }) {
  let test = true;

  return (
    <>
      <h2>{titulo}</h2>
      {typeof filtro === 'function' ? (
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
      ) : (
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
    </>
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