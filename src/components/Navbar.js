import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <h1>I am navbar</h1>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/othersection">Othersection</Link></p>
            <p><Link to="/secondsection">Secondsection</Link></p>
        </>
    )
}
