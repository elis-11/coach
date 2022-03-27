import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

export const Nav = () => {
  return (
<nav>
    <ul>
        <li>
            <NavLink to="/" className={(navData)=> (navData.isActive ? "active" : "none")} end>Home</NavLink>
        </li>
        <li>
            <NavLink to="/todo" className={(navData)=> (navData.isActive ? "active" : "none")}>Todo</NavLink>
        </li>
        <li>
            <NavLink to="/course" className={(navData)=> (navData.isActive ? "active" : "none")}>Course</NavLink>
        </li>
    </ul>
</nav>
    )
}
