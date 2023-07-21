import { createGlobalStyle, styled } from "styled-components";
import 'typeface-roboto';

export const GlobalStyle = createGlobalStyle<{}>`
    :root{
        --light-gray: #222222;
        --translucent-black: rgba(0,0,0,0.40);
        --white: #fff;
        --solid-black: #262626;
        --full-black: rgba(0,0,0,0.65);
        --image-back: #111;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: var(--light-gray);
        margin: 0rem;   
        padding: 0rem;
    }
`;

export const UserMesage = styled.div`
    width: 100vw;
    height: 100vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    h1 {
    font-weight: 200;
    font-size: 1.95rem;
    margin: 0rem;
    margin-top: 0.43rem;
    padding: 0rem;
    color: var(--white);
  }
`
