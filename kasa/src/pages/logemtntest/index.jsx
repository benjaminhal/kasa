import CarouselSlide from "../../components/Carousel";
import { useParams} from "react-router";

import Content from "../../components/Infos";
import Data from '../../data/logements.json'
import Error from "../Error";
import Hote from "../../components/Hote";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Logements() {
 const { id } = useParams()
 const advertise = Data.find((item) => item.id === id)
 /*const {equipements, description, host} = advertise*/
if(!advertise){
  return(
    <Error/>
  )
}
 return (
	<div>
		<Header/>
		<div className="container mainhero-pageProduct">
			{/*<Hote hote={host} />*/}
			<CarouselSlide images={advertise?.pictures} />
			<Content titre={advertise} />
			{/*<div className="info">
				
				<div className="infoDescription">
				<Content titre="Description" content={description} />
				</div>
				<div className="infoEquipement">
				<Content titre="Equipement" content={equipements} />
				</div>
 			</div>*/}
    	</div>
		<Footer/>
	</div>
    
 )
}

export default Logements;