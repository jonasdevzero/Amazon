import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    min-width: 10rem;
    max-height: 40rem;
    margin: 1rem;
    padding: 2rem;
    z-index: 1;
    background-color: #fff;
`;

export const Info = styled.div`
    max-height: 10rem;
    align-self: start;
`;

export const Title = styled.p`

`;

export const Price = styled.div`
    margin-top: .5rem;
`;

export const Rating = styled.div`
    align-self: flex-start;

    .MuiSvgIcon-root {
        color: #ff0;
    }
`;

export const Image = styled.img`
    width: 100%;
    max-height: 20rem;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    object-fit: contain;
`;

export const Add = styled.button`
    padding: .2rem .5rem;
    margin-top: 1rem;
    border: .1rem solid;
    border-color: #a88734 #9c7e31 #846a29;
    background-color: #f0c14b;
    color: #111;
    cursor: pointer;
`;
