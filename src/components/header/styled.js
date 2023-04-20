import styled from "styled-components"

export const HeaderTag = styled.header`
    width: 100%;
`

export const HeaderOne = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;

    @media(max-width: 977px){
        height: 120px;
    }
`

export const SubHeader = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 180px;
    padding: 15px 0;

    @media(max-width: 977px){
        height: 120px;
        flex-direction: column-reverse;
        gap: 20px;
    }
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

    @media(max-width: 977px){
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
        gap: 20px;
    }
`

export const SAnchor = styled.a`
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
`

export const Select = styled.select`
    width: 165px;
    height: 100%;
    border: 1px solid;
    border-radius: 8px;
    padding: 0 10px;
    cursor: pointer;
`

export const ContainerSearch = styled.div`
    width: 300px;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Input = styled.input`
    width: 60%;
    height: 100%;
    border: 1px solid;
    border-radius: 8px;
    padding: 0 20px;
    transition: .2s;

    &:focus{
        outline: 0;
        width: 100%;
    }

    @media(max-width: 977px){
        width: 100%;
    }
`

export const BtnSearch = styled.div`
    width: 30px;
    height: 80%;
    position: absolute;
    right: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
`