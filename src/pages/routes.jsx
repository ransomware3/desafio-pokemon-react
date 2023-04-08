import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./home"
import { PagePokeDetails } from "./poke-details"


const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/pokemon/:id" element={<PagePokeDetails/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export { AppRoutes }