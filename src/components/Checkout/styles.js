import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 2rem;
    background-color: #FFF;
    height: max-content;
`;

export const Left = styled.div`
    img {
        width: 100%;
        margin-bottom: 1rem;
    };
`;

export const Title = styled.h2`
    margin-right: 1rem;
    padding: 1rem;
    border-bottom: .1rem solid lightgray;
`;

export const Right = styled.div``;

export const Product = styled.div`
    display: flex;
    margin-top: 2rem;
    margin-bottom: 2rem;

    img {
        width: 18rem;
        height: 18rem;
        object-fit: contain;
    };
`;

export const ProductInfo = styled.div`
    padding-left: 2rem;

    &:nth-child(1) { // product title
        font-size: 1.7rem;
        font-weight: 800;
    };

    div {
        .MuiSvgIcon-root {
            color: #ff0;
        };
    };

    button {
        background-color: #f0c14b;
        border: .1rem solid;
        border-color: #a88734 #9c7e31 #846a29;
        margin-top: 1rem;
        color: #111;
        cursor: pointer;
    };
`;
