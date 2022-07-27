import styled from "styled-components";

export const ProductDetailsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    img {
        width: 40%;
    }
`

export const ProductInfoStyle = styled.div`
    width:40%;
    button{
        font-size: 1rem;
        font-weight: medium;
        padding: 0.5rem 1rem;
        cursor: pointer;

    }
`

export const QuantityStyle = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0rem;

    button {
        background: transparent;
        display: flex;
        border: none;
        font-size: 1.5rem;
        padding: 0rem 0.5rem ;
    }
    p{
        width: 1rem;
        text-align: center;
    }
    span {
        color: var(--secondary)
    }
    svg{
        color: #494949;       
        cursor: pointer;
    }
`

export const BuyStyle = styled.button`
    width: 100%;
    background: var(--primary);
    color: white;
    font-weight: 500;
 `;