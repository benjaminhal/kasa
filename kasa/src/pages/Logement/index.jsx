
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/logements.json'
import Header from '../../components/Header';
import Carousel from '../../components/Carouselle';
import Footer from '../../components/Footer';
import Collapse from '../../components/Collapse';



 function Logements() {
	
	const [image, setImage] = useState([]);

	const idlogement = useParams('id').id;
	
	useEffect(() => {
		const logement = datas.filter(data => data.id === idlogement);
		setImage(logement[0].pictures);
	}, [idlogement]);
	return (
		<>
			<Header/>
			<Carousel image={image}/>
			<Footer/>
		</>
	)
}

export default Logements