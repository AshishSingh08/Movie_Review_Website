import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --background-color: #303443;
        --midGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMid: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    :-webkit-any-link {
        color: var(--white);
    }

    html, body, #root {
        min-height:100vh;
    }

    body {
        margin: 0;
        padding: 0;
        background: var(--background-color);
        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }
        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }

    }
`;
