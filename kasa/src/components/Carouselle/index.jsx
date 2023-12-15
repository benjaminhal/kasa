import React from 'react';
import ReactDOM from 'react-dom';
import './carousel.scss'
import FlecheDroite from '../../assets/flecheDroite.png'
import FlecheGauche from '../../assets/flecheGauche.png'
import { useEffect, useState } from "react"


function Carousel({image}) {

    const [ImageActuel, setImageActuel] = useState(0)

    const imageSuivante = () => {
        setImageActuel(ImageActuel + 1)
        if(ImageActuel === image.length - 1)
            setImageActuel(0)
    }

    const imagePrecedente = () => {
        setImageActuel(ImageActuel - 1)
        if(ImageActuel === 0)
            setImageActuel(image.length - 1)
    }

    return (
        <section style={{backgroundImage : `url(${image[ImageActuel]})`}} className='carousel'>
            {image.length > 1 && 
                <>
                    <img 
                        className='carousel_fleche carousel_fleche_droite' 
                        src={FlecheDroite} 
                        alt="fleche droite" 
                        onClick={imageSuivante}
                    />
                    <img 
                        className='carousel_fleche carousel_fleche_gauche' 
                        src={FlecheGauche} 
                        alt="fleche gauche" 
                        onClick={imagePrecedente}
                    />
                    <p className='nombreimg'>{ImageActuel + 1} / {image.length}</p>
                </>
            } 
        </section>
    )
}

export default Carousel