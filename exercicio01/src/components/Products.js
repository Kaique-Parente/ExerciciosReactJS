import Card from "./Card";
import styled from "styled-components";

const ProductsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;

    @media (max-width: 949px) {
        gap: 40px;
    }
`

export default function Products({ products }){
    return(
        <ProductsContainer>
           {products.map((product, index) => (
            <Card
                id={index + 1}
                image={product.image}
                title={product.title}
                description={product.description}
            />
           ))}
        </ProductsContainer>
    );
}