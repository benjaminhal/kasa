import './collapse.scss'
import fleche from '../../assets/fleche.png';
import { useState } from 'react';

function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        
            <div className="collapse" >
                <h3 className='collapse_titre' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'fleche fleche_haut' : 'fleche fleche_bas'} 
                        src={fleche} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'collapse_contenue' : 'collapse_contenu_cache'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    
                    }
                </div> 
            </div>
        
    )
}


export default Collapse