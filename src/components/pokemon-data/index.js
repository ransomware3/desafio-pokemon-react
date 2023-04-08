import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import {
    Section,
    CardDiv,
    Img
} from './styled'

const PokeData = () => {

    const [poke, setPoke] = useState({})

    const { id } = useParams()

    const getPokeData = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => {
            const data = res.data
            setPoke(data)
        })
    }

    // console.log(poke.sprites.front_default)

    useEffect(() => {
        getPokeData(id)
        // eslint-disable-next-line
    },[id])


    return(
        <>
            <Section>
                <CardDiv>
                    <p>Types/ Types</p>
                    <Img src={poke.sprites.front_default} alt={poke.name}></Img>
                    {console.log(poke)}
                    <h2>{poke.name}</h2>
                </CardDiv>
            </Section>
        </>
    )
}

export { PokeData }