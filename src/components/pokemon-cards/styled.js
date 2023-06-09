import styled from "styled-components"
import { Link } from "react-router-dom"

export const Main = styled.main`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.background1};
`

export const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;
`

export const Ul = styled.ul`
    width: 85%;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 40px;
`

export const Li = styled.li`
    width: 250px;
    height: 300px;
    background-position: center;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    transition: .2s;
    -webkit-box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);

    &:hover{
        transform: scale(1.03);
    }
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 15px;
`
    
export const H2 = styled.h2`    
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    text-shadow: 2px 2px 2px #000;
`

export const P = styled.p`
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 2px #000;
`

export const Img = styled.img`
    width: 50%;
    margin: 30px 0;
    -webkit-filter: drop-shadow(3px 3px 3px #222);
    filter: drop-shadow(3px 3px 3px #222);
`

export const StyledLink = styled(Link)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;
`

export const BtnCharge = styled.button`
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 50px;
    cursor: pointer;
    transition: .2s;
    background-color: ${props => props.theme.background2};
    color: ${props => props.theme.color1};

    -webkit-box-shadow: 0px 7px 7px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 7px 7px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 7px 7px 0px rgba(0,0,0,0.75);

    &:hover{
        transform: scale(0.95);
    }
`