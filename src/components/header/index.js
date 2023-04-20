import Logo from '../../images/pokemon-logo.png'
import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { ThemeToggler } from '../theme-toggler'
import { useContext } from "react"
import { ThemeeContext } from "../../contexts/theme-context"
import {
    HeaderTag,
    HeaderOne,
    ImgLogo,
    Nav,
    Ul,
    LogoContainer,
    HeaderLimiter,
    SubHeader,
    Select,
    Input,
    ContainerSearch,
    BtnSearch,
    SAnchor
} from './styled'

const Header = ({ filterPokemons, typeFilter }) => {

    const [selectedValue, setSelectedValue] = useState('')

    const { theme } = useContext(ThemeeContext)

    useEffect(() => {
        typeFilter(selectedValue)
        // eslint-disable-next-line
    }, [selectedValue])

    return (
        <>
            <HeaderTag id="top">
                <HeaderOne style={{ backgroundColor: theme.background4 }}>
                    <HeaderLimiter>
                        <LogoContainer>
                            <a href='/'><ImgLogo src={Logo}></ImgLogo></a>
                        </LogoContainer>
                        <Nav>
                            <Ul>
                                <li><SAnchor rel="noopener noreferrer" target='_blank' href='https://pokeapi.co/'>PokeAPI</SAnchor></li>
                                <li><ThemeToggler/></li>
                            </Ul>
                        </Nav>
                    </HeaderLimiter>
                </HeaderOne>
                <SubHeader style={{ backgroundColor: theme.background2 }}>
                    <Select style={{ backgroundColor: theme.background3, color: theme.color3,  borderColor: theme.color2 }} value={selectedValue} onChange={({target}) => {
                            setSelectedValue(target.value)
                            typeFilter(selectedValue)
                        }}>
                        <option style={{ color: theme.color3 }} value=''>type-filter(none)</option>
                        <option style={{ color: theme.color3 }} value='normal'>Normal</option>
                        <option style={{ color: theme.color3 }} value='fighting'>Fighting</option>
                        <option style={{ color: theme.color3 }} value='flying'>Flying</option>
                        <option style={{ color: theme.color3 }} value='poison'>Poison</option>
                        <option style={{ color: theme.color3 }} value='ground'>Ground</option>
                        <option style={{ color: theme.color3 }} value='rock'>Rock</option>
                        <option style={{ color: theme.color3 }} value='bug'>Bug</option>
                        <option style={{ color: theme.color3 }} value='ghost'>Ghost</option>
                        <option style={{ color: theme.color3 }} value='steel'>Steel</option>
                        <option style={{ color: theme.color3 }} value='fire'>Fire</option>
                        <option style={{ color: theme.color3 }} value='water'>Water</option>
                        <option style={{ color: theme.color3 }} value='grass'>Grass</option>
                        <option style={{ color: theme.color3 }} value='electric'>Electric</option>
                        <option style={{ color: theme.color3 }} value='psychic'>Psychic</option>
                        <option style={{ color: theme.color3 }} value='ice'>Ice</option>
                        <option style={{ color: theme.color3 }} value='dragon'>Dragon</option>
                        <option style={{ color: theme.color3 }} value='dark'>Dark</option>
                        <option style={{ color: theme.color3 }} value='fairy'>Fairy</option>
                    </Select>
                    <ContainerSearch>
                        <Input style={{ backgroundColor: theme.background3, color: theme.color3, borderColor: theme.color2 }} onChange={({target}) => filterPokemons(target.value.toLowerCase())} placeholder='Search...' type='text'></Input>
                        <BtnSearch style={{ color: theme.color3 }}><BiSearch/></BtnSearch>
                    </ContainerSearch>
                </SubHeader>
            </HeaderTag>
        </>
    )
}

export { Header }