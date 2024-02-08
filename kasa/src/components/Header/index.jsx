import { Link } from "react-router-dom"
import './header.scss'
import Logo from '../../assets/LOGO.png'
import React, { useState, useRef, useEffect } from 'react';
import Data from "../../data/logements.json"



function Header() {
    let localisation = window.location.pathname;
	const [underline, setUnderline] = useState("accueil");
    const id = Data.id
    const [count, setCount] = useState(0);
    const newRef = useRef(null);
    useEffect(()=>{
        document.addEventListener("mousedown",handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        };
    });
    const handleClick = () => {
        setCount("autre");
    };
    const handleOutsideClick = (e) => {
        if (newRef.current && !newRef.current.contains(e.target)){
            setCount(("autre"))
        }
    };
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
                    <li className={localisation === '/*' ? 'nav_item' : 'nav_item'} onClick={() => setUnderline("autre")}>  
                    <Link to="/*"></Link>  
                    </li>
                </ul>
            </nav>
		</header>
	)
}

export default Header