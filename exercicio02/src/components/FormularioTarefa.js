import { useState } from 'react';
import styled from 'styled-components';

const ContainerFormulario = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
`;

const Botao = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const FormularioTarefa = ({ adicionarTarefa }) => {
  const [tarefa, setTarefa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarefa) {
      adicionarTarefa(tarefa);
      setTarefa('');
    }
  };

  return (
    <ContainerFormulario>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Digite uma nova tarefa"
        />
        <Botao type="submit">Adicionar Tarefa</Botao>
      </form>
    </ContainerFormulario>
  );
};

export default FormularioTarefa;