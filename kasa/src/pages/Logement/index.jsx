import Carousel from "../../components/Carousel";
import { useParams} from "react-router";

import Info from "../../components/Infos";
import Data from '../../data/logements.json'
import Error from "../Error";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Logements() {
 const { id } = useParams()
 const info = Data.find((item) => item.id === id)
if(!info){
  return(
    <Error/>
  )
}
 return (
	<div>
		<div className="container mainhero-pageProduct">
			<Carousel images={info.pictures} />
			<Info info={info} />
    	</div>
	</div>
    
 )
}

export default Logements;