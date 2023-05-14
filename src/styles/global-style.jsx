import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        font-family: 'Bangers', cursive;
        letter-spacing: 3px;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        background-color: #222;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: #000;
    }
`