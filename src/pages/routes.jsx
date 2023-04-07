import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./home"


const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export { AppRoutes }