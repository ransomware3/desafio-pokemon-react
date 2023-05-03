import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { IoIosArrowBack } from 'react-icons/io'
import { getPokeData, getAbilityDesc } from "../../services/poke-individual"
import { ClipLoader } from "react-spinners"
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

export const PokeData = () => {
    const [poke, setPoke] = useState()
    const [pokeMoves, setPokeMoves] = useState([])
    const [pokeAbilities, setPokeAbilities] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [abilityUrls, setAbilityUrls] = useState([])
    const [abilityDesc, setAbilityDesc] = useState([])

    const { id } = useParams()
    const { theme } = useContext(ThemeeContext)
    const urlGif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`

    useEffect(() => {
        getPokeData(id, setPoke, setAbilityUrls, setPokeAbilities, setPokeMoves, setIsLoading)
        getAbilityDesc(abilityUrls, setAbilityDesc)
        // eslint-disable-next-line
    }, [isLoading])

    const getTypes = () => {
        const pokemonTypes = poke.types

        return (pokemonTypes[1]) ? pokemonTypes[0].type.name.toUpperCase() + " / " + pokemonTypes[1].type.name.toUpperCase() : pokemonTypes[0].type.name.toUpperCase()
    }

    const RenderList = () => (
        <>
            {isLoading ? (
                <div style={{ marginTop: '40px' }}><ClipLoader color={ theme.color3 }/></div>
            ) : (
                <CardDiv>
                    <P>{getTypes()}</P>
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
                                        <DescP>{abilityDesc[index]}</DescP>
                                    </li>
                                ))}
                            </Ul>
                        </MiniContainerList>
                    </ContainerUl>
                </CardDiv>
            )
            }
        </>
    )

    return (
        <>
            <BackLink to="/"><IoIosArrowBack /></BackLink>
            <Section>
                {RenderList()}
            </Section>
        </>
    )
}