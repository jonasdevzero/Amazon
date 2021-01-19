import styled from 'styled-components/macro';

export const Container = styled.div`
    background-color: #FFF;
`;

export const Inner = styled.div`
    h1 {
        text-align: center;
        padding: 1rem;
        font-weight: 400;
        background-color: rgb(234, 237, 237);
        border-bottom: .1rem solid lightgray;

        a {
            text-decoration: none;
        };
    };
`;

export const Section = styled.div`
    display: flex;
    padding: 2rem;
    margin: 0 2rem;
    border-bottom: .1rem solid lightgray;
`;

export const TitleContainer = styled.div`
    flex: .2;
`;

export const Address = styled.div`
    flex: .8;
`;

export const Items = styled.div`
    flex: .8;
`;

export const Details = styled.div`
    flex: .8;
`;

export const PriceContainer = styled.div`

`;
