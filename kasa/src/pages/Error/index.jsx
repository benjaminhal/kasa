import Header from "../../components/Header"
import Footer from "../../components/Footer";
import './error.scss'
import { Link } from 'react-router-dom';
import Erreur from "../../assets/404.png"

 function Error() {
	return (
		<div className='erreur'>

			<div className="erreur_infos">
        		<img src={Erreur} alt="erreur" className='erreur_infos_titre' />
				<p className='erreur_infos_content'>Oups ! La page que vous recherchez n'existe pas.</p>
			</div>
        <div className="acceuil">
          <Link className='notFound_infos_return' to='/'>Retourner sur la page d'accueil</Link>
        </div>
				
		</div>
    
	)
}
export default Error