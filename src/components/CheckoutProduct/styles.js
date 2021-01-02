import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    margin-top: 2rem;
    margin-bottom: 2rem;

    img {
        width: 18rem !important;
        height: 18rem;
        object-fit: contain;
    };
`;

export const Info = styled.div`
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
