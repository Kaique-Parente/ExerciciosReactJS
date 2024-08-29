import styled from 'styled-components';

const Lista = styled.ul`
  list-style: none;
  padding: 0;
`;

const ItemLista = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Botao = styled.button`
  margin-left: auto;
  padding: 5px 10px;
  font-size: 14px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e53935;
  }
`;

const ListaTarefas = ({ tarefas, alternarConclusaoTarefa, removerTarefa }) => {
  return (
    <Lista>
      {tarefas.map(tarefa => (
        <ItemLista key={tarefa.id}>
          <Checkbox
            type="checkbox"
            checked={tarefa.concluida}
            onChange={() => alternarConclusaoTarefa(tarefa.id)}
          />
          {tarefa.texto}
          <Botao onClick={() => removerTarefa(tarefa.id)}>Remover</Botao>
        </ItemLista>
      ))}
    </Lista>
  );
};

export default ListaTarefas;