import Logo from '../../images/pokemon-logo.png'
import {
    HeaderTag,
    ImgLogo,
    Nav,
    Ul,
    LogoContainer,
    HeaderLimiter,
    SLink
} from './styled'

const Header = () => {
    return(
        <>
            <HeaderTag>
                <HeaderLimiter>
                    <LogoContainer>
                        <ImgLogo src={Logo}></ImgLogo>
                    </LogoContainer>
                    <Nav>
                        <Ul>
                            <li><SLink to='#'>Home</SLink></li>
                            <li><SLink to='#'>API</SLink></li>
                        </Ul>
                    </Nav>
                </HeaderLimiter>
            </HeaderTag>
        </>
    )
}

export { Header }