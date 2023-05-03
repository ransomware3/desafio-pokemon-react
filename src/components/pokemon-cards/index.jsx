import { Header } from "../header"
import { useEffect, useState } from "react"
import { SkeletonStyled } from "../skeleton"
import { getPokemons, showMore } from "../../services/poke-home"
import { ClipLoader } from "react-spinners"
import { useContext } from "react"
import { ThemeeContext } from "../../contexts/theme-context"
import {
    Ul,
    Li,
    Section,
    H2,
    Img,
    StyledLink,
    BtnCharge,
    ContainerTitle,
    P,
    UlSearch,
    Main
} from './styled'

export const CardsPokemon = () => {
    const [ renderPokemons, setRenderPokemons ] = useState([])
    const [ searchedPokemons, setSearchedPokemons ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ btnLoad, setBtnLoad ] = useState(false)
    const [ offset, setOffset ] = useState(100)

    const { theme } = useContext(ThemeeContext)

    useEffect(() => {
        getPokemons(setRenderPokemons, setIsLoading)
        // eslint-disable-next-line
    }, [])

    const filterPokemons = search => {
        if (search === "") {
            setSearchedPokemons([])
        } else {
            const filteredPokemons = renderPokemons.filter(item => item.name.includes(search) || item.id.toString().includes(search))
            setSearchedPokemons(filteredPokemons)
        }
    }

    const typeFilter = search => {
        if (search === "") {
            setSearchedPokemons([])
        } else {
            const filteredTypes = renderPokemons.filter(item => {
                const pokeTypes = item.types

                return (item.types[1]) ? pokeTypes[0].type.name.includes(search) || pokeTypes[1].type.name.includes(search) : pokeTypes[0].type.name.includes(search)
            })
            setSearchedPokemons(filteredTypes)
        }
    }

    const RenderList = pokeList => (
        <>
            {
                pokeList.map((item, index) => {
                    const pokemonTypes = item.types
                    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`

                    const getTypes = () => {
                        return (pokemonTypes[1]) ? pokemonTypes[0].type.name + " / " + pokemonTypes[1].type.name : pokemonTypes[0].type.name
                    }

                    return (
                        <Li key={index}>
                            <StyledLink to={`/pokemon/${item.id}`}>
                                <P>{getTypes()}</P>
                                <Img alt="imagem do pokemon" src={imgUrl}></Img>
                                <ContainerTitle>
                                    <H2>{'#' + item.id + ''}</H2>
                                    <H2>&nbsp;{item.name}</H2>
                                </ContainerTitle>
                            </StyledLink>
                        </Li>
                    )
                })
            }
        </>
    )

    return (
        <Main>
            <Header typeFilter={typeFilter} filterPokemons={filterPokemons} />
            <Section>
                {searchedPokemons.length > 0 && (
                    <UlSearch>
                        {RenderList(searchedPokemons)}
                    </UlSearch>
                )}

                <Ul>
                    {isLoading ? (
                        <SkeletonStyled />
                    ) : (
                        <>
                            {RenderList(renderPokemons)}
                        </>
                    )}
                </Ul>
                {isLoading ? (null) : (
                    btnLoad ? (<div style={{ marginTop: '40px' }}><ClipLoader color={ theme.color3 }/></div>)
                    : (<BtnCharge id="more" onClick={() => showMore(renderPokemons, setRenderPokemons, offset, setOffset, setBtnLoad)}>SHOW MORE</BtnCharge>)
                )}
            </Section>
        </Main>
    )

}