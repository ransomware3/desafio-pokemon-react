import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./home"
import { PagePokeDetails } from "./poke-details"
import { SkeletonTheme } from "react-loading-skeleton"
import { useContext } from "react"
import { ThemeeContext } from "../contexts/theme-context"


const AppRoutes = () => {

    const { theme } = useContext(ThemeeContext)

    return (
        <>
            <SkeletonTheme baseColor={theme.skeletonColor} highlightColor={theme.skeletonHigh}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/pokemon/:id" element={<PagePokeDetails />} />
                    </Routes>
                </BrowserRouter>
            </SkeletonTheme>
        </>
    )
}

export { AppRoutes }