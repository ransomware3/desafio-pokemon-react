import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body{
        background-color: rgb(15, 1, 1);
    }

    h1,h2,h3,h4,h5,h6,p,span,li,img{
        color: #000;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: #000;
    }
`

export { GlobalStyle }