import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #29292E;
        --gray: #393940;
        --green: #00B37E;
        --black: #29292E;
        --black_button: #323238;
        --red: #F75A68;
        --text-title: #fff;
        --text-bory: #C4C4CC;
        

    }

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    // font-size: 16px(Ideal para desktop)

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 16x0,93=15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //16x0,875=14px
        }

    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        //color: #fff;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button { 
        cursor: pointer;
    }

    [disabled] {
        opacity:  0.6;
        cursor: not-allowed;
    }
 `;
