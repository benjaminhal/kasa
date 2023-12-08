import { Link } from "react-router-dom"
import './header.scss'
import Home from "../../pages/Home"
import Propos from "../../pages/A_Propos"
import Logo from '../../assets/LOGO.png'

function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			<nav className="nav">
                <ul className="nav_list">
                    <li className="accueil">
                        <Link to="/">Acceuil</Link>    
                    </li>
                    <li className="">
                        <Link to="/à-propos">A Propos</Link>    
                    </li>
                </ul>
            </nav>
		</header>
	)
}

export default Header