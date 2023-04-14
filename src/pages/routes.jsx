import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./home"
import { PagePokeDetails } from "./poke-details"
import { SkeletonTheme } from "react-loading-skeleton"


const AppRoutes = () => {
    return (
        <>
            <SkeletonTheme baseColor="#333" highlightColor="#444">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/pokemon/:id" element={<PagePokeDetails/>}/>
                    </Routes>
                </BrowserRouter>
            </SkeletonTheme>
        </>
    )
}

export { AppRoutes }