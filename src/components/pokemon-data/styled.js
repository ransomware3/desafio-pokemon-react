import styled from "styled-components"

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
    width: 1200px;
    // height: 700px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #111;
    background-position: center;
    border-radius: 10px;
    -webkit-box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
`

export const Img = styled.img`
    width: 400px;
`

export const ContainerUl = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 80px;
`

export const MiniContainerList = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Ul = styled.ul`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    background-color: #222;
    border-radius: 10px;
    overflow-y: auto;
    // padding: 20px 0;
    -webkit-box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 15px 12px 0px rgba(0,0,0,0.75);
`

export const P = styled.p`
    color: #ccc;
    margin-bottom: 10px;
`

export const H2 = styled.h2`
    font-size: 35px;
    color: #ccc;
    margin-bottom: 40px;
`

export const H3 = styled.h3`
    color: #ccc;
    margin-bottom: 15px;
`