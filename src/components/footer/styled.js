import styled from "styled-components"

export const FooterTag = styled.footer`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background4};
`

export const P = styled.p`
    color: ${props => props.theme.color1};
`

export const Anchor = styled.a`
    font-weight: bold;
    color: ${props => props.theme.color1};
`