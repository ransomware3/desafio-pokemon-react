import { useState, useEffect } from "react"

export const useTheme = (key, initalState) => {
    const [state, setState] = useState(() => {
        const storage = localStorage.getItem(key)

        return (storage) ? JSON.parse(storage) : initalState      
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}