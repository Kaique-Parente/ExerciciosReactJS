import styled from "styled-components";

const ContainerSVG = styled.div `
    width: 400px;
    height: 183px;

    @media (max-width: 768px) {
        width: 330px;
    }
`

export default function Wave(props){
    return(
        <ContainerSVG>
            <svg  viewBox="0 0 683 296" fill={props.color} xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 258C125.562 40.8755 354.654 401.997 675.353 261.214C679.643 259.331 682.5 254.999 682.5 250.314V13C682.5 6.37258 677.127 1 670.5 1H12.5C5.87258 1 0.5 6.37258 0.5 13V258Z"/>
                <text x="50%" y="40%" fontSize="80" textAnchor="middle" dy=".3em" fill="#A2F2D5">
                    {props.texto}
                </text>
            </svg>
        </ContainerSVG>
    );
}