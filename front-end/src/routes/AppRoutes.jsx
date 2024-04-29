import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Login } from "../pages/Login/index"
import { Register } from "../pages/Register/index"
import {Home} from "../pages/Home/index"
import About from "../pages/About/index"
import { AnimalDetails } from "../pages/AnimalDetails/index"


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/Home" element={<Home />}/>
                <Route path="/AnimalDetails" element={<AnimalDetails />}/>
                <Route path="/About" element={<About />}/>
            </Routes>
        </BrowserRouter>
    )
}