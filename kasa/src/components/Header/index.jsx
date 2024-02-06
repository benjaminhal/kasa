import { Link } from "react-router-dom"
import './header.scss'
import Logo from '../../assets/LOGO.png'
import React, { useState } from 'react';



function Header() {
    let localisation = window.location.pathname;
	const [underline, setUnderline] = useState("accueil");
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			<nav className="nav">
                <ul className="nav_list">
                    <li className={localisation === '/' ? 'nav_list_active' : 'nav_item'} onClick={() => setUnderline("accueil")}>
                        <Link to="/">Accueil</Link>    
                    </li>
                    <li className={localisation === '/a-propos' ? 'nav_list_active' : 'nav_item'} onClick={() => setUnderline("propos")}>
                        <Link to="/a-propos">A Propos</Link>    
                    </li>
                </ul>
            </nav>
		</header>
	)
}

export default Header