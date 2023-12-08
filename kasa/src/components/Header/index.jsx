import { Link } from "react-router-dom"
import './header.scss'
import Home from "../../pages/Home"
import Propos from "../../pages/A_Propos"

function Header() {
	return (
		<header className='header'>
			<h1>
				<img src="../assests/LOGO.png" alt="kasa, location d'appartements" />
			</h1>
			<nav className="nav">
                <ul className="nav_list">
                    <li className="accueil">
                        Acceuil
                        <link rel="stylesheet" href={Home} />
                    </li>
                    <li className="">
                        A Propos
                        <link rel="stylesheet" href={Propos} />
                    </li>
                </ul>
            </nav>
		</header>
	)
}

export default Header