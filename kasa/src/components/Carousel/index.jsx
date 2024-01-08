import React, { useState } from "react"
import "./carousel.scss"

function Carousel({ images })
{
    const [imageActuel, setCurrent] = useState(0)
    const totalImg = images.length
    const prev = () => {
        setCurrent(imageActuel === 0 ? totalImg - 1 : imageActuel - 1)
    }

    const next = () => {
        setCurrent(imageActuel === totalImg - 1 ? 0 : imageActuel + 1)
    }

    
    if( totalImg === 1)
    {
        return (<div className="carousel logement" >
                    <img src={images[imageActuel]} alt="Logement"/>
                </div>
        ) 
    }

    return (
        <div className="carousel logement" >

            <img src={images[imageActuel]} alt="Logement"/>
            <p className="indexImage">{imageActuel+1}/{totalImg}</p>
            <button className="arrow-left" onClick={prev}></button>
            <button className="arrow-right" onClick={next}></button>
        
        </div>  
    )
}

export default Carousel