import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #FFF;

    img { // logo
        width: 10rem;
        margin: 2rem auto;
        object-fit: contain;
    };
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: fit-content;

    padding: 2rem;
    border: .1rem solid lightgray;
    border-radius: .5rem;

    h1 {
        font-weight: 500;
        margin-bottom: 2rem;
    };

    p {
        font-size: 1.2rem;
        margin-top: 1.5rem;
    };
`;

export const Form = styled.form`
    h5 {
        margin-bottom: 5px;
    };
`;

export const Input = styled.input`
    width: 98%;
    height: 3rem;
    background-color: #FFF;
    margin-bottom: 1rem;
`;

export const Button = styled.button`
    width: 100%;
    height: 3rem;
    background-color: #f0c14b;
    border: .1rem solid;
    border-color: #a88734 #9c7e31 #846a29;
    border-radius: .2rem;
    margin-top: 1rem;
    cursor: pointer;
`;

export const Register = styled.button`
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    border: .1rem solid darkgray;
    border-radius: .2rem;
    cursor: pointer;
`;
