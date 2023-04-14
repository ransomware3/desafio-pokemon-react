import styled from "styled-components"
import { Link } from 'react-router-dom'

export const HeaderTag = styled.header`
    width: 100%;
`

export const HeaderOne = styled.div`
    width: 100%;
    height: 80px;
    background: #000;
    display: flex;
    justify-content: center;
`

export const SubHeader = styled.div`
    width: 100%;
    height: 60px;
    background-color: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 180px;
    padding: 15px 0;
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
    width: 150px;
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

export const SAnchor = styled.a`
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
`

export const Select = styled.select`
    width: 8%;
    height: 100%;
    background-color: #333;
    border: none;
    border-radius: 8px;
    padding: 0 10px;
    color: #ccc;
    cursor: pointer;
`

export const Option = styled.option`
    color: #ccc;
`

export const ContainerSearch = styled.div`
    width: 15%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Input = styled.input`
    width: 60%;
    height: 100%;
    background-color: #333;
    border: none;
    border-radius: 8px;
    padding: 0 20px;
    transition: .2s;
    color: #ccc;

    &:focus{
        outline: 0;
        width: 100%;
    }
`

export const BtnSearch = styled.div`
    width: 30px;
    height: 80%;
    position: absolute;
    right: 3px;
    color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
`