import './App.css';
import styled from 'styled-components';
import ListaTarefa from './components/ListaTarefa';
import Header from './components/Header';

const ContainerMain = styled.div `
  background-color: #0BBF7D;
  padding: 60px;

  border-radius: 12px;
`

function App() {
  return (
    <div className="App">
      <ContainerMain>
        <ListaTarefa/>
      </ContainerMain>
    </div>
  );
}

export default App;
