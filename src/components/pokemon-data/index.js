import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { IoIosArrowBack } from 'react-icons/io'
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
    DescP,
    BackLink
} from './styled'

const PokeData = () => {
    const [poke, setPoke] = useState()
    const [pokeMoves, setPokeMoves] = useState([])
    const [pokeAbilities, setPokeAbilities] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [abilityUrls, setAbilityUrls] = useState([])
    const [abilityDesc, setAbilityDesc] = useState([])

    useEffect(() => {
        getPokeData(id)
        getAbilityDesc()
        // eslint-disable-next-line
    }, [isLoading])

    const { id } = useParams()

    const getPokeData = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => {
                const data = res.data
                const moves = res.data.moves
                const ability = res.data.abilities
                const list = ability.map((item) => item.ability)
                const url = list.map((item) => item.url)
                setPoke(data)
                setAbilityUrls(url)
                setPokeAbilities(ability)
                setPokeMoves(moves)
            })
            .then(() => setIsLoading(false))
            .catch(error => console.log(error))
    }

    const getAbilityDesc = () => {
        const effectsArray = []
        axios.all(abilityUrls.map((item) => axios.get(item)
            .then((res) => {
                const effects = res.data.effect_entries
                effectsArray.push(effects[1])
                const finalRes = effectsArray.map((item) => item.effect)
                setAbilityDesc(finalRes)
            })))
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
            <BackLink to="/"><IoIosArrowBack/></BackLink>
            <Section>
                {isLoading ? (
                    <P>Loading...</P>
                ) : (
                    <>
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
                                                <H3>{item.ability.name}</H3>
                                                <DescP style={{ marginBottom: 30 }}>{abilityDesc[index]}</DescP>
                                            </li>
                                        ))}
                                    </Ul>
                                </MiniContainerList>
                            </ContainerUl>
                        </CardDiv>
                    </>
                )
                }
            </Section>
        </>
    )
}

export { PokeData }