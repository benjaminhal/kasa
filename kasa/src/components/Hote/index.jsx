import React from "react"

import "./host.scss"

const Hote = ({ hote }) => {
    const hotesplit = hote.name.split(" ")
    const [name, lastname] = hotesplit

    return (
        <div className="style.hote">
            <div className="hotename">
                <p className="firstname">{name.trim()}</p>
                <p className="style.lastname">{lastname.trim()}</p>
            </div>

            <img src={hote.picture} alt="Proprietaire" className="style.hotephoto" />
        </div>
    )
}
export default Hote