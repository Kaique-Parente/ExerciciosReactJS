import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListaTarefas from './components/ListaTarefas';
import FormularioTarefa from './components/FormularioTarefa';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registre os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dados iniciais do gráfico
const dadosIniciais = {
  labels: ['Concluídas', 'Pendentes'],
  datasets: [
    {
      label: 'Número de Tarefas',
      data: [0, 0],
      backgroundColor: ['#4caf50', '#f44336'],
    },
  ],
};

const ContainerApp = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const App = () => {
  const [tarefas, setTarefas] = useState([]);
  const [dadosGrafico, setDadosGrafico] = useState(dadosIniciais);

  useEffect(() => {
    // Atualiza os dados do gráfico sempre que as tarefas mudarem
    const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;
    const tarefasPendentes = tarefas.length - tarefasConcluidas;

    setDadosGrafico({
      labels: ['Concluídas', 'Pendentes'],
      datasets: [
        {
          label: 'Número de Tarefas',
          data: [tarefasConcluidas, tarefasPendentes],
          backgroundColor: ['#4caf50', '#f44336'],
        },
      ],
    });
  }, [tarefas]); // Atualiza o gráfico sempre que o estado de tarefas mudar

  const adicionarTarefa = (tarefa) => {
    setTarefas([...tarefas, { id: Date.now(), texto: tarefa, concluida: false }]);
  };

  const alternarConclusaoTarefa = (id) => {
    const tarefasAtualizadas = tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  const removerTarefa = (id) => {
    const tarefasAtualizadas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(tarefasAtualizadas);
  };

  return (
    <ContainerApp>
      <h1>Lista de Tarefas</h1>
      <FormularioTarefa adicionarTarefa={adicionarTarefa} />
      <ListaTarefas tarefas={tarefas} alternarConclusaoTarefa={alternarConclusaoTarefa} removerTarefa={removerTarefa} />
      <Bar data={dadosGrafico} options={{ responsive: true }} />
    </ContainerApp>
  );
};

export default App;
