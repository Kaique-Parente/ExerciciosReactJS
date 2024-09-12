import styled from "styled-components";
import logo from "../assets/images/logo.png";
import adicionarPNG from "../assets/images/adicionar.png";

const ContainerHeader = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 80px;

    #logo {
        width: 64px;
    }

    h1 {
        margin-left: 20px;

        font-size: 48px;
        font-weight: 700;
        color: #FFFFFF;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

        @media (max-width: 768px) {
            font-size: 34px;
        }
    }

    div {
        display: flex;
        align-items: center;
    }

    input {
        width: 450px;
        margin-right: 10px;
    }

    input, button {
        height: 35px;
        padding: 10px;

        border: none;
        border-radius: 8px;

        font-size: 15px;
        margin-top: 30px;

        @media (max-width: 768px) {
          font-size: 12px;
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 8px;

        background-color: #147350;
        color: #FFFFFF;

        cursor: pointer;
    }

    button:hover {
        background-color: #0C4832;
    }

    img {
        width: 24px;
    }

    @media (max-width: 768px) {
        display: block;
        padding: 20px;
        margin: 15px 0px;
    }
`

export default function Header(props){
    return(
        <ContainerHeader>
            <div>
                <img id="logo" src={logo}/>
                <h1>{props.titulo}</h1>
            </div>
            <div>
                <input type="text" id="inputTexto" onKeyDown={props.onKeyDown} value={props.novoTexto} placeholder="Escreva sua Tarefa" onChange={props.onChange}/>
                <button onClick={props.onClick}>Adicionar Tarefa <img className="adicionar" src={adicionarPNG}/></button>
            </div>
        </ContainerHeader>
    );
}