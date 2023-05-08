import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <nav className='navStyle'>
                <div>
                    <img className='LogoEdit' src={props.logo} alt="logoImage" />
                </div>
                <div className='comp'>
                    <NavLink className='set' to="/">{props.home}</NavLink>
                    <NavLink className='set' to="/about">{props.about}</NavLink>
                    <NavLink className='set' to="/Deals">{props.Deals}</NavLink>
                    <NavLink className='set' to="/contact">{props.contact}</NavLink>
                </div>
                <div className='rightNav'>
                    <ul>
                        <NavLink className={"user"} to="/user">MyAccount</NavLink>
                        <li><a href="#"><i class="fa-solid fa-language"></i></a></li>
                        <li><a href="#"><i class="fa-solid fa-shop"></i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar