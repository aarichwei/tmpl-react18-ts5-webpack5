import React from "react"
import { createHashRouter } from "react-router-dom"
import About from "../pages/about"
import Home from "../pages/home"

export default createHashRouter([
    {
        path: '/',
        element: <Home />,
        children: []
    },
    {
        path: '/about',
        element: <About />,
        children: []
    }
])