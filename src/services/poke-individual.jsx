import axios from "axios"

export const getPokeData = (id, setPoke, setAbilityUrls, setPokeAbilities, setPokeMoves, setIsLoading) => {
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
        .catch(err => console.log(err))
}

export const getAbilityDesc = (abilityUrls, setAbilityDesc) => {
    const effectsArray = []
    axios.all(abilityUrls.map((item) => axios.get(item)
        .then((res) => {
            const effects = res.data.effect_entries
            effectsArray.push(effects[1])
            const finalRes = effectsArray.map((item) => item.effect)
            setAbilityDesc(finalRes)
        }))).catch(err => console.log(err))
}