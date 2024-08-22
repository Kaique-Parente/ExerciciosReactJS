import styled from "styled-components";
import images from "../assets/images/Images";
import Title from "./Title";
import Description from "./Description";

const CardContainer = styled.div`
    width:400px;
    height: 600px;
    
    background-color: #ffffff;
    text-align: center;

    border-radius: 8px;
    box-shadow: rgba(188,188,188,255) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
 

    @media (max-width: 1052px) {
        width: 350px;
    }

    @media (max-width: 949px) {
        width: 300px;
    }

    @media (max-width: 690px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 80px;
        width: 250px;
    }

    @media (max-width: 620px) {
        width: 400px;
        padding-bottom: 120px;
    }
`

const CardText = styled.div`
    padding: 40px;

    @media (max-width: 1052px) {
        padding: 0px 20px;
    }
`

const Image = styled.img`
    width: 100%;
    height: 250px;
    border-radius: 8px 8px 0px 0px;

    margin-bottom: 40px;

    @media (max-width: 690px) {
        margin-bottom: 40px;
    }
`

export default function Card({image, title, description}){
    return(
        <CardContainer>
            <Image src={images[image]} alt={title} />
            <CardText>
                <div>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </div>
            </CardText>
            
        </CardContainer>
    );
}