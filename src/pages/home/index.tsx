import React from "react"
import { useNavigate } from "react-router-dom"

export default function (props: any) {
    const navigate = useNavigate()
    return <div>
        <h1>home</h1>
        <div onClick={() => { navigate('/about') }}>click to about</div>
    </div>
}