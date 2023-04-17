import { Header } from "../header"
import axios from "axios"
import { useEffect, useState } from "react"
import { SkeletonStyled } from "../skeleton"
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

const CardsPokemon = () => {
    const [renderPokemons, setRenderPokemons] = useState([])
    const [SearchedPokemons, setSearchedPokemons] = useState([])
    const [number, setNumber] = useState(200)
    const [isLoading, setIsLoading] = useState(true)

    const { theme } = useContext(ThemeeContext)

    useEffect(() => {
        getPokemons()
        // eslint-disable-next-line
    }, [])

    const getPokemons = () => {

        let endpoints = []

        for (let i = 1; i <= number; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        axios.all(endpoints.map((item) => axios.get(item)))
            .then((res) => {
                const data = res.map((item) => item.data)
                setRenderPokemons(data)
            }).then(() => setIsLoading(false))
            .catch((error) => console.log('erro getPokemons' + error))
    }

    const showMore = () => {
        const morePokemons = number + 200
        let endpoints = []

        for (let i = number + 1; i <= morePokemons; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        axios.all(endpoints.map((item) => axios.get(item)))
            .then((res) => {
                const data = res.map((item) => item.data)
                setRenderPokemons([...renderPokemons, ...data])
            })
            .catch((error) => console.log('erro showMore' + error))

        setNumber(morePokemons)
    }

    const filterPokemons = (search) => {
        if (search === "") {
            setSearchedPokemons([])
        } else {
            const filteredPokemons = renderPokemons.filter((item) => item.name.includes(search) || item.id.toString().includes(search))
            setSearchedPokemons(filteredPokemons)
        }
    }

    const typeFilter = (search) => {
        if (search === "") {
            setSearchedPokemons([])
            return
        } else {
            const filteredTypes = renderPokemons.filter((item) => {
                const pokeTypes = item.types

                if (item.types[1]) {
                    return pokeTypes[0].type.name.includes(search) || pokeTypes[1].type.name.includes(search)
                } else {
                    return pokeTypes[0].type.name.includes(search)
                }
            })
            setSearchedPokemons(filteredTypes)
        }
    }

    return (
        <Main style={{ backgroundColor: theme.background1 }}>
            <Header typeFilter={typeFilter} filterPokemons={filterPokemons} />
            <Section>
                {SearchedPokemons.length > 0 && <UlSearch style={{ borderColor: theme.color3}}>
                    {SearchedPokemons.map((item, index) => {
                        const pokemonTypes = item.types
                        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`

                        const getTypes = () => {
                            if (pokemonTypes[1]) {
                                return pokemonTypes[0].type.name + " / " + pokemonTypes[1].type.name
                            } else {
                                return pokemonTypes[0].type.name
                            }
                        }

                        return (
                            <Li style={{ backgroundColor: theme.background2 }} key={index}>
                                <StyledLink to={`/pokemon/${item.id}`}>
                                    <P style={{ color: theme.color1 }}>{getTypes()}</P>
                                    <Img alt="imagem do pokemon" src={imgUrl}></Img>
                                    <ContainerTitle>
                                        <H2 style={{ color: theme.color1 }}>{item.id + '.'}</H2>
                                        <H2 style={{ color: theme.color1 }}>&nbsp;{item.name}</H2>
                                    </ContainerTitle>
                                </StyledLink>
                            </Li>
                        )
                    })}
                </UlSearch>
                }

                <Ul>
                    {isLoading ? (
                        <SkeletonStyled/>
                    ) : (
                        <>
                            {renderPokemons.map((item, index) => {

                                const pokemonTypes = item.types
                                const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`

                                const getTypes = () => {
                                    if (pokemonTypes[1]) {
                                        return pokemonTypes[0].type.name + " / " + pokemonTypes[1].type.name
                                    } else {
                                        return pokemonTypes[0].type.name
                                    }
                                }

                                return (
                                    <Li style={{ backgroundColor: theme.background2 }} key={index}>
                                        <StyledLink to={`/pokemon/${item.id}`}>
                                            <P style={{ color: theme.color1 }}>{getTypes()}</P>
                                            <Img alt="imagem do pokemon" src={imgUrl}></Img>
                                            <ContainerTitle>
                                                <H2 style={{ color: theme.color1 }}>{item.id + '.'}</H2>
                                                <H2 style={{ color: theme.color1 }}>&nbsp;{item.name}</H2>
                                            </ContainerTitle>
                                        </StyledLink>
                                    </Li>
                                )
                            })}
                        </>
                    )}
                </Ul>
                {isLoading ? (<></>) : (
                    <BtnCharge style={{ backgroundColor: theme.background2, color: theme.color1 }} id="more" onClick={showMore}>SHOW MORE</BtnCharge>
                )}
            </Section>
        </Main>
    )
}

export { CardsPokemon }