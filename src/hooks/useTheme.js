import { useState, useEffect } from "react"

export const useTheme = (key, initalState) => {

    const [state, setState] = useState(() => {
        const storage = localStorage.getItem(key)

        return (storage !== null) ? JSON.parse(storage) : initalState      
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
        // eslint-disable-next-line
    }, [state])

    return [state, setState]
}