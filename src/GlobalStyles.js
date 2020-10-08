import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
    }
`

export const Container = styled.div`

`