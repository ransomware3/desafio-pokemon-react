import styled from "styled-components"
import { Link } from 'react-router-dom'

export const HeaderTag = styled.header`
    width: 100%;
    height: 100px;
    background: rgb(255,0,0);
    background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(125,0,0,1) 50%, rgba(107,0,0,1) 100%);
    display: flex;
    justify-content: center;
`

export const HeaderLimiter = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImgLogo = styled.img`
    width: 50%;
`

export const Nav = styled.nav`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Ul = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const SLink = styled(Link)`
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
`