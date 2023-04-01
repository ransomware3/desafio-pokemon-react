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
    P
} from '../components/pokemon-card/styled-home'

const Home = () => {

    const [pokemons, setPokemons] = useState([])
    const [number, setNumber] = useState(25)

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
            .then((res) => setPokemons(res))
            .catch((error) => console.log(error))
    }

    const showMore = () => {
        const morePokemons = number + 25
        let endpoints = []

        for (let i = number + 1; i <= morePokemons; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        axios.all(endpoints.map((item) => axios.get(item)))
            .then((res) => setPokemons([...pokemons, ...res]))
            .catch((error) => console.log(error))

        setNumber(morePokemons)
    }

    const filterPokemons = (search) => {
        let filteredPokemons = []

        if (search === "") {
            getPokemons()
        }

        for (let i in pokemons) {
            if (pokemons[i].data.name.includes(search) || pokemons[i].data.id.toString().includes(search)) {
                filteredPokemons.push(pokemons[i])
                console.log(pokemons[i].data.id)
            }
        }

        setPokemons(filteredPokemons)
    }

    return (
        <>
            <Header filterPokemons={filterPokemons}/>
            <Section>
                <Ul>
                    {pokemons.map((item, index) => {

                        const pokemonTypes = item.data.types

                        const getTypes = () => {
                            if(pokemonTypes[1]){
                                return pokemonTypes[0].type.name + " / " + pokemonTypes[1].type.name
                            }else{
                                return pokemonTypes[0].type.name
                            }
                        }

                        return (
                            <Li key={index}>
                                <StyledLink>
                                    <P>{getTypes()}</P>
                                    <Img alt="imagem do pokemon" src={item.data.sprites.front_default}></Img>
                                    <ContainerTitle>
                                        <H2>{item.data.id + '.'}</H2>
                                        <H2>&nbsp;{item.data.name}</H2>
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