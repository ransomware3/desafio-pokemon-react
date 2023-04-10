import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import {
    Section,
    CardDiv,
    Img,
    Ul,
    ContainerUl,
    P,
    H2,
    H3,
    MiniContainerList,
} from './styled'

const PokeData = () => {

    const [poke, setPoke] = useState()
    const [pokeMoves, setPokeMoves] = useState([])
    const [pokeAbilities, setAbilities] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getPokeData(id)
        // eslint-disable-next-line
    }, [])

    const { id } = useParams()

    const getPokeData = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => {
                const data = res.data
                const moves = res.data.moves
                const ability = res.data.abilities
                console.log(res.data)
                setPoke(data)
                setPokeMoves(moves)
                setAbilities(ability)
                setIsLoading(false)
            })
            .catch(error => console.log(error))
    }

    const getTypes = () => {
        const pokemonTypes = poke.types

        if (pokemonTypes[1]) {
            return pokemonTypes[0].type.name + " / " + pokemonTypes[1].type.name
        } else {
            return pokemonTypes[0].type.name
        }
    }

    return (
        <>
            <Section>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <CardDiv>
                        <P>{getTypes()}</P>
                        <Img src={poke.sprites.front_default} alt={poke.name}></Img>
                        <H2>{poke.name}</H2>
                        <ContainerUl>
                            <MiniContainerList>
                                <H3>Moves</H3>
                                <Ul>
                                    {poke && pokeMoves.map((item, index) => (
                                        <li key={index}>
                                            <P>{item.move.name}</P>
                                        </li>
                                    ))}
                                </Ul>
                            </MiniContainerList>
                            <MiniContainerList>
                                <H3>Abilities</H3>
                                <Ul>
                                    {poke && pokeAbilities.map((item, index) => (
                                        <li key={index}>
                                            <P>{item.ability.name}</P>
                                        </li>
                                    ))}
                                </Ul>
                            </MiniContainerList>
                        </ContainerUl>
                    </CardDiv>
                )
                }
            </Section>
        </>
    )
}

export { PokeData }