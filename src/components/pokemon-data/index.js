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
    BackLink,
    MovesP
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

    const urlGif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`

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
            return pokemonTypes[0].type.name.toUpperCase() + " / " + pokemonTypes[1].type.name.toUpperCase()
        } else {
            return pokemonTypes[0].type.name.toUpperCase()
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
                        <CardDiv>
                            <P style={{ fontWeight: "bold" }}>{getTypes()}</P>
                            <Img src={urlGif} alt={poke.name}></Img>
                            <H2>{poke.name.toUpperCase()}</H2>
                            <ContainerUl>
                                <MiniContainerList>
                                    <H3>MOVES</H3>
                                    <Ul>
                                        {poke && pokeMoves.map((item, index) => (
                                            <li key={index}>
                                                <MovesP>{item.move.name.toUpperCase()}</MovesP>
                                            </li>
                                        ))}
                                    </Ul>
                                </MiniContainerList>
                                <MiniContainerList>
                                    <H3>ABILITIES</H3>
                                    <Ul>
                                        {poke && pokeAbilities.map((item, index) => (
                                            <li key={index}>
                                                <H3>{item.ability.name.toUpperCase()}</H3>
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