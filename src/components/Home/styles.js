import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    max-width: 107.3rem;
    margin: 0 auto;
`;

export const Inner = styled.div`

`;

export const Banner = styled.img`
    width: 100%;
    z-index: -1;
    margin-bottom: -15rem;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const Row = styled.div`
    display: flex;
    z-index: 1;
    margin: 0 .5rem;
`;