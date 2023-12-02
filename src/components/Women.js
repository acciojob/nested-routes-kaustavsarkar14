import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Item from "./Item"

const Women = () => {
    return (
        <div>
            <p>Women Items:</p>
            <ul>
                <li><Link to={"/women/Grooming"} >Grooming</Link></li>
                <li><Link to={"/women/Shirt"} >Shirt</Link></li>
                <li><Link to={"/women/Trouser"} >Trouser</Link></li>
                <li><Link to={"/women/Jwellery"} >Jwellery</Link></li>
            </ul>
        </div>
    )
}

export default Women