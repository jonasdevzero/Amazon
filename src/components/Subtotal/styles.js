import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 30rem;
    height: 10rem;
    padding: 2rem;
    background-color: #F3F3F3;
    border: .1rem solid #DDD;
    border-radius: .3rem;
`;

export const Gift = styled.small`
    display: flex;
    align-items: center;

    input {
        margin-right: .5rem;
    };
`;

export const Button = styled.button`
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    border: .1rem solid;
    border-color: #a88734 #9c7e31 #846a29;
    border-radius: .2rem;
    color: #111;
    background-color: #f0c14b;
    cursor: pointer;
`;
