import { createGlobalStyle } from "styled-components";
import 'typeface-roboto';

const GlobalStyle = createGlobalStyle`
    :root{
        --light-gray: #333333;
        --translucent-black: rgba(0,0,0,0.40);
        --white: #fff;
        --solid-black: #262626;
        --full-black: rgba(0,0,0,0.65);;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: var(--light-gray);
        margin: 0rem;
        padding: 0rem;
    }
`;

export default GlobalStyle;