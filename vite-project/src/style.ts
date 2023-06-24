import { createGlobalStyle } from "styled-components";
import 'typeface-roboto';

const GlobalStyle = createGlobalStyle`
    :root{
        --light-gray: #333333;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: var(--light-gray);
        margin: 0rem;
        padding: 0rem;
    }
`;

export default GlobalStyle;