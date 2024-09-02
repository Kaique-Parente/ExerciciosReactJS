import styled from "styled-components";

const ContainerHeader = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
`

export default function Header(props){
    return(
        <ContainerHeader>
            <h1>{props.titulo}</h1>
            <div>
                <input type="text" id="inputTexto" value={props.novoTexto} onChange={props.handleChange}/>
                <button onClick={props.adicionarTarefa}>dwadaw</button>
            </div>
        </ContainerHeader>
    );
}