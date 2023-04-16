import styled from "styled-components"

export const Btn = styled.a`
    position: fixed;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #222;
    color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 8px 6px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 8px 6px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 8px 6px 0px rgba(0,0,0,0.75);

    @media(max-width: 1020px){
        right: 15px;
    }
`