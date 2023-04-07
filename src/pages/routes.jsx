import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SkeletonTheme } from "react-loading-skeleton"
import { Home } from "./home"


const AppRoutes = () => {
    return (
        <>
            <SkeletonTheme baseColor="#333" highlightColor="#444">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </SkeletonTheme>
        </>
    )
}

export { AppRoutes }