import { Link } from "react-router-dom"
import './header.scss'
import Home from "../../pages/Home"
import Propos from "../../pages/A_Propos"
import Logo from '../../assets/LOGO.png'




function Header() {
    const localisation = window.location.pathname;
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			<nav className="nav">
                <ul className="nav_list">
                    <li className={localisation === '/' ? 'nav_list_active' : 'nav_item'} >
                        <Link to="/">Accueil</Link>    
                    </li>
                    <li className={localisation === '/%C3%A0-propos' ? 'nav_list_active' : 'nav_item'}>
                        <Link to="/à-propos">A Propos</Link>    
                    </li>
                </ul>
            </nav>
		</header>
	)
}

export default Header