import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #29292E;
        --gray: #393940;
        --green: #00B37E;
        --red: #F75A68;
        --black: #29292E;
        --black_button: #323238;
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

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    
}
.react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
}

.react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }


}



 `;
