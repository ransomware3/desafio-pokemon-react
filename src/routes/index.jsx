import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { PagePokeDetails } from "../pages/poke-details"

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/pokemon/:id" element={<PagePokeDetails />} />
            </Routes>
        </BrowserRouter>
    )
}