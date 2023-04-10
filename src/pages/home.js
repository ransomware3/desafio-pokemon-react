import { Header } from "../components/header"
import axios from "axios"
import { useEffect, useState } from "react"
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
    PLoading
} from '../components/pokemon-card/styled-home'

const Home = () => {
    const [renderPokemons, setRenderPokemons] = useState([])
    const [SearchedPokemons, setSearchedPokemons] = useState([])
    const [number, setNumber] = useState(100)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getPokemons()
        setIsLoading(false)
        // eslint-disable-next-line
    }, [])

    renderPokemons.map((item) => console.log(item))

    const getPokemons = () => {

        let endpoints = []

        for (let i = 1; i <= number; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        axios.all(endpoints.map((item) => axios.get(item)))
            .then((res) => {
                const data = res.map((item) => item.data)
                setRenderPokemons(data)
            })
            .catch((error) => console.log('erro getPokemons' + error))
    }

    const showMore = () => {
        const morePokemons = number + 100
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
        <>
            <Header typeFilter={typeFilter} filterPokemons={filterPokemons} />
            <Section>
                {SearchedPokemons.length > 0 && <UlSearch>
                        {SearchedPokemons.map((item, index) => {
                            const pokemonTypes = item.types

                            const getTypes = () => {
                                if (pokemonTypes[1]) {
                                    return pokemonTypes[0].type.name + " / " + pokemonTypes[1].type.name
                                } else {
                                    return pokemonTypes[0].type.name
                                }
                            }

                            return (
                                <Li key={index}>
                                    <StyledLink to={`/pokemon/${item.id}`}>
                                        <P>{getTypes()}</P>
                                        <Img alt="imagem do pokemon" src={item.sprites.front_default}></Img>
                                        <ContainerTitle>
                                            <H2>{item.id + '.'}</H2>
                                            <H2>&nbsp;{item.name}</H2>
                                        </ContainerTitle>
                                    </StyledLink>
                                </Li>
                            )
                        })}
                    </UlSearch>
                }

                <Ul>
                    {isLoading ? (
                        <PLoading>Loading...</PLoading>
                    ) : (
                        <>
                            {renderPokemons.map((item, index) => {

                                const pokemonTypes = item.types

                                const getTypes = () => {
                                    if (pokemonTypes[1]) {
                                        return pokemonTypes[0].type.name + " / " + pokemonTypes[1].type.name
                                    } else {
                                        return pokemonTypes[0].type.name
                                    }
                                }

                                return (
                                    <Li key={index}>
                                        <StyledLink to={`/pokemon/${item.id}`}>
                                            <P>{getTypes()}</P>
                                            <Img alt="imagem do pokemon" src={item.sprites.front_default}></Img>
                                            <ContainerTitle>
                                                <H2>{item.id + '.'}</H2>
                                                <H2>&nbsp;{item.name}</H2>
                                            </ContainerTitle>
                                        </StyledLink>
                                    </Li>
                                )
                            })}
                        </>
                    )}
                </Ul>
                {isLoading ? (<></>) : (
                    <BtnCharge onClick={showMore}>Carregar mais</BtnCharge>
                )}
            </Section>
        </>
    )
}

export { Home }