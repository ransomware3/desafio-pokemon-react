import axios from "axios"

export const getPokemons = (setPoke, setLoad) => {
    let endpoints = []

    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100`)
    .then(res => {
        const dataResponse = res.data.results
        dataResponse.map(item => endpoints.push(item.url))

        Promise.all(endpoints.map(item => axios.get(item)))
        .then(res => {
            const data = res.map(item => item.data)
            return setPoke(data)
        })
        .then(() => setLoad(false))
        .catch(err => console.log(err))
    })
}

export const showMore = (renderPoke, setPoke, value, setValue, setLoad) => {
    let endpoints = []
    setLoad(true)

    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${value}`)
    .then(res => {
        const dataResult = res.data.results
        dataResult.map(item => endpoints.push(item.url))
        
        Promise.all(endpoints.map(item => axios.get(item)))
        .then(res => {
            const data = res.map(item => item.data)
            setPoke([...renderPoke, ...data])
            setValue(value + 25)
            setLoad(false)
        })
        .catch(err => console.log(err))
    })
}