import { useState, useEffect } from "react"

const useTheme = (key, initalState) => {
    const [state, setState] = useState(() => {
        const storage = localStorage.getItem(key)

        if(storage){
            return JSON.parse(storage)
        }else{
            return initalState
        }        
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export { useTheme }