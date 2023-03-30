import axios from "axios"
import { useEffect, useState } from "react"
import {
    Ul,
    Li,
    Section,
    H2,
    Img,
    StyledLink,
    BtnCharge
} from './styled'

const Card = () => {

    const [pokemons, setPokemons] = useState([])
    const [number, setNumber] = useState(10)

    useEffect(() => {
        getPokemons()
        // eslint-disable-next-line
    }, [])


    const getPokemons = () => {

        let endpoints = []

        for(let i = 1; i <= number; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        axios.all(endpoints.map((item) => axios.get(item)))
            .then((res) => setPokemons(res))
            .catch((error) => console.log(error))
    }

    const showMore = () => {

        const morePokemons = number + 10
        let endpoints = []

        for(let i = number + 1; i <= morePokemons; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        axios.all(endpoints.map((item) => axios.get(item)))
            .then((res) => setPokemons([...pokemons, ...res]))
            .catch((error) => console.log(error))

        setNumber(morePokemons)
    }


    return (
        <Section>
            <Ul>
                {pokemons.map((item, index) => {
                    return (
                        <Li key={index}>
                            <StyledLink>
                                <Img alt="imagem do pokemon" src={item.data.sprites.front_default}></Img>
                                <H2>{item.data.name}</H2>
                            </StyledLink>
                        </Li>
                    )
                })}
            </Ul>
            <BtnCharge onClick={showMore}>Carregar mais</BtnCharge>        
        </Section>
    )
}

export { Card }