import axios from "axios"

export const getPokemons = (setAllPokemons, setIsLoading, setRenderPokemons) => {
    let endpoints = []

    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1271`)
    .then(res => {
        const dataResponse = res.data.results
        dataResponse.map(item => endpoints.push(item.url))

        Promise.all(endpoints.map(item => axios.get(item)))
        .then(res => {
            const dataAll = res.map(item => item.data)
            const dataRender = dataAll.slice(0, 20)
            setRenderPokemons(dataRender)
            setAllPokemons(dataAll)
        })
        .then(() => setIsLoading(false))
        .catch(err => console.log(err))
    })
}

export const showMore = (renderPoke, setPoke, value, setValue, setLoad, allPokemons) => {
    setLoad(true)

    const test = allPokemons.slice(value, value + 20)
    setPoke([...renderPoke, ...test])
    setValue(value + 20)
    setLoad(false)
}