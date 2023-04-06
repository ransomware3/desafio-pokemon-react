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
    UlSearch
} from '../components/pokemon-card/styled-home'

const Home = () => {

    // const [pokemons, setPokemons] = useState([])
    const [renderPokemons, setRenderPokemons] = useState([])
    const [SearchedPokemons, setSearchedPokemons] = useState([])
    const [number, setNumber] = useState(25)

    useEffect(() => {
        getPokemons()
        // eslint-disable-next-line
    }, [])

    // const getAllPokemons = async () => {
    //     let endpoints = []

    //     for (let i = 1; i <= 50; i++) {
    //         endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    //     }

    //     axios.all(endpoints.map((item) => axios.get(item))).then((res) => {
    //         const data = res.map((item) => item.data)
    //         setPokemons(data)
    //     })
    // }
    // getAllPokemons()


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
        const morePokemons = number + 25
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
            return
        } else {
            const filteredPokemons = renderPokemons.filter((item) => item.name.includes(search) || item.id.toString().includes(search))
            setSearchedPokemons(filteredPokemons)
        }
    }

    return (
        <>
            <Header filterPokemons={filterPokemons} />
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
                                    <StyledLink>
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
                                <StyledLink>
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
                </Ul>
                <BtnCharge onClick={showMore}>Carregar mais</BtnCharge>
            </Section>
        </>
    )
}

export { Home }