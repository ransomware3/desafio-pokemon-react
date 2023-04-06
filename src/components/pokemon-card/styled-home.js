import styled from "styled-components"
import { Link } from "react-router-dom"

export const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;
`

export const Ul = styled.ul`
    width: 85%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    gap: 40px;
`

export const UlSearch = styled.ul`
    width: 85%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    gap: 40px;
    margin-bottom: 60px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 60px;
`

export const Li = styled.li`
    width: 250px;
    height: 300px;
    background-color: #111;
    background-position: center;
    border-radius: 10px;
    -webkit-box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
    
export const H2 = styled.h2`    
    color: #ccc;
    text-transform: uppercase;
    font-size: 20px;
`

export const P = styled.p`
    color: #ccc;
    font-weight: bold;
`

export const Img = styled.img`
    width: 50%;
    margin: 30px 0;
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
    background: rgb(255,0,0);
    background: radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(228,0,0,1) 50%, rgba(107,0,0,1) 100%);
    margin-top: 50px;
    cursor: pointer;
    transition: .2s;

    &:hover{
        transform: scale(1.05);
    }
`