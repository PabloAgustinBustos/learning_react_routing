import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavbar = () => {
    return (
        <nav className='navbar'>
            <NavLink to="/" style={({isActive}) => ({color: isActive ? "red" : "grey"})}>home</NavLink>
            <NavLink to="/about" style={({isActive}) => ({color: isActive ? "red" : "grey"})}>about</NavLink>
            <NavLink to="/products" style={({isActive}) => ({color: isActive ? "red" : "grey"})}>products</NavLink>
        </nav>
    )
}

export default StyledNavbar
