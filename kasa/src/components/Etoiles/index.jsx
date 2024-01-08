import './etoiles.scss'
import Data from '../../data/logements.json'
import { useParams } from "react-router";
function Stars({rating}){
    const rate = Array(5).fill(0)
    const { id } = useParams()

    const info = Data.find((item) => item.id === id)
  return(  
    <div className='stars d-flex justify-content-end'>
    {/* je boucle sur mon pseudo tableau d'étoiles */}
    {rate.map((i, index) => (
        // si le rating est > à l'index 0 alors alors étoile rouge sinon rating 0 = index 0 =in étoile blanche
        info.rating > index ? <span className="star-red" key={index}></span> : <span className="star-grey" key={index}></span>
    ))}

</div>
  )   
    
}

export default Stars