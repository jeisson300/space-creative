import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../components/pages/home/HomePage"
import { LoginPage } from "../components/pages/login/LoginPage"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}
