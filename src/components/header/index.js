import Logo from '../../images/pokemon-logo.png'
import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import {
    HeaderTag,
    HeaderOne,
    ImgLogo,
    Nav,
    Ul,
    LogoContainer,
    HeaderLimiter,
    SLink,
    SubHeader,
    Select,
    Input,
    ContainerSearch,
    BtnSearch,
    Option,
    SAnchor
} from './styled'

const Header = ({ filterPokemons, typeFilter }) => {

    const [selectedValue, setSelectedValue] = useState('')

    useEffect(() => {
        typeFilter(selectedValue)
        // eslint-disable-next-line
    }, [selectedValue])

    return (
        <>
            <HeaderTag>
                <HeaderOne>
                    <HeaderLimiter>
                        <LogoContainer>
                            <ImgLogo src={Logo}></ImgLogo>
                        </LogoContainer>
                        <Nav>
                            <Ul>
                                <li><SLink to='/'>Home</SLink></li>
                                <li><SAnchor rel="noopener noreferrer" target='_blank' href='https://pokeapi.co/'>API</SAnchor></li>
                            </Ul>
                        </Nav>
                    </HeaderLimiter>
                </HeaderOne>
                <SubHeader>
                    <Select value={selectedValue} onChange={({target}) => {
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
                        <Input onChange={({target}) => filterPokemons(target.value.toLowerCase())} placeholder='Search...' type='text'></Input>
                        <BtnSearch><BiSearch/></BtnSearch>
                    </ContainerSearch>
                </SubHeader>
            </HeaderTag>
        </>
    )
}

export { Header }