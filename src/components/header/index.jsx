import Logo from '../../assets/pokemon-logo.png'
import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { ThemeToggler } from '../theme-toggler'
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
    SAnchor,
    Option
} from './styled'

export const Header = ({ filterPokemons, typeFilter }) => {

    const [selectedValue, setSelectedValue] = useState('')

    useEffect(() => {
        typeFilter(selectedValue)
        // eslint-disable-next-line
    }, [selectedValue])

    return (
        <HeaderTag id="top">
            <HeaderOne>
                <HeaderLimiter>
                    <LogoContainer>
                        <a href='/'><ImgLogo src={Logo}></ImgLogo></a>
                    </LogoContainer>
                    <Nav>
                        <Ul>
                            <li><SAnchor rel="noopener noreferrer" target='_blank' href='https://pokeapi.co/'>PokeAPI</SAnchor></li>
                            <li><ThemeToggler /></li>
                        </Ul>
                    </Nav>
                </HeaderLimiter>
            </HeaderOne>
            <SubHeader>
                <Select value={selectedValue} onChange={({ target }) => {
                    setSelectedValue(target.value)
                    typeFilter(selectedValue)
                }}>
                    <Option value=''>type-filter(none)</Option>
                    <Option value='normal'>Normal</Option>
                    <Option value='fighting'>Fighting</Option>
                    <Option value='flying'>Flying</Option>
                    <Option value='poison'>Poison</Option>
                    <Option value='ground'>Ground</Option>
                    <Option value='rock'>Rock</Option>
                    <Option value='bug'>Bug</Option>
                    <Option value='ghost'>Ghost</Option>
                    <Option value='steel'>Steel</Option>
                    <Option value='fire'>Fire</Option>
                    <Option value='water'>Water</Option>
                    <Option value='grass'>Grass</Option>
                    <Option value='electric'>Electric</Option>
                    <Option value='psychic'>Psychic</Option>
                    <Option value='ice'>Ice</Option>
                    <Option value='dragon'>Dragon</Option>
                    <Option value='dark'>Dark</Option>
                    <Option value='fairy'>Fairy</Option>
                </Select>
                <ContainerSearch>
                    <Input onChange={({ target }) => filterPokemons(target.value.toLowerCase())} placeholder='Search...' type='text'></Input>
                    <BtnSearch><BiSearch /></BtnSearch>
                </ContainerSearch>
            </SubHeader>
        </HeaderTag>
    )
}