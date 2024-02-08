import './card.scss'
import { Link } from 'react-router-dom'

function Card({id, title, cover}) {

	return (
		<a href={`/accomodation/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</a>
	)
}

export default Card