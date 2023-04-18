import styled from "styled-components"
import { Link } from "react-router-dom"
import BackgroundPage from '../../images/fundo-site.png'

export const Section = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`

export const CardDiv = styled.div`
    width: 1400px;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-position: center;
    border-radius: 10px;
    background-image: url(${BackgroundPage});
    background-position: center;
    background-size: cover;
    -webkit-box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
`

export const Img = styled.img`
    width: 400px;
    margin: 40px 0;
`

export const ContainerUl = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 80px;

    @media(max-width: 1200px){
        flex-direction: column;
        align-items: center;
    }
`

export const MiniContainerList = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 1200px){
        width: 80%;
    }
`

export const Ul = styled.ul`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px 0 20px;
    border-radius: 10px;
    overflow-y: auto;
    -webkit-box-shadow: -3px 7px 8px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -3px 7px 8px 0px rgba(0,0,0,0.75);
    box-shadow: -3px 7px 8px 0px rgba(0,0,0,0.75);
`

export const P = styled.p`
    margin-bottom: 10px;
    color: #222;
`

export const DescP = styled.p`
    color: #333;
    line-height: 22px;
`

export const MovesP = styled.p`
    font-weight: bold;
    margin-bottom: 20px;
    color: #222;
`

export const H2 = styled.h2`
    font-size: 35px;
    margin-bottom: 40px;
    color: #222;

    @media(max-width: 1200px){
        margin-bottom: 80px;
    }
`

export const H3 = styled.h3`
    margin-bottom: 15px;
    color: #222;
`

export const BackLink = styled(Link)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 20px;
    top: 20px;
    -webkit-box-shadow: 0px 8px 6px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 8px 6px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 8px 6px 0px rgba(0,0,0,0.75);
`