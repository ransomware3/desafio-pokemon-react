import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { IoIosArrowBack } from 'react-icons/io'
import { useContext } from "react"
import { ThemeeContext } from "../../contexts/theme-context"
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

    const { theme } = useContext(ThemeeContext)

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
            <BackLink style={{ backgroundColor: theme.background2, color: theme.color1 }} to="/"><IoIosArrowBack/></BackLink>
            <Section style={{ backgroundColor: theme.background1 }}>
                {isLoading ? (
                    <P>Loading...</P>
                ) : (
                    <>
                        <CardDiv style={{ backgroundColor: theme.background2 }}>
                            <P style={{ color: theme.color1 }}>{getTypes()}</P>
                            <Img src={poke.sprites.front_default} alt={poke.name}></Img>
                            <H2 style={{ color: theme.color1 }}>{poke.name}</H2>
                            <ContainerUl>
                                <MiniContainerList>
                                    <H3 style={{ color: theme.color1 }}>Moves</H3>
                                    <Ul style={{ backgroundColor: theme.background2 }}>
                                        {poke && pokeMoves.map((item, index) => (
                                            <li key={index}>
                                                <P style={{ color: theme.color1 }}>{item.move.name}</P>
                                            </li>
                                        ))}
                                    </Ul>
                                </MiniContainerList>
                                <MiniContainerList>
                                    <H3 style={{ color: theme.color1 }}>Abilities</H3>
                                    <Ul style={{ backgroundColor: theme.background2 }}>
                                        {poke && pokeAbilities.map((item, index) => (
                                            <li key={index}>
                                                <H3 style={{ color: theme.color1 }}>{item.ability.name}</H3>
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