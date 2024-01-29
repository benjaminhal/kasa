import "./infos.scss";
import Tags from "../Tags";
import Stars from "../Etoiles";
import Collapse from "../Collapse";
import Data from "../../data/logements.json"

function Info({ info }) {
  
  const [premier, deuxieme] = info.host.name.split(" ");
  return (
    <div className="container">
      <div className="container details">
        <div className="col info">
          <h1>{info.title}</h1>
          <h3>{info.location}</h3>
          <Tags tags={info?.tags} />
        </div>
        <div className="col infohost  host ">
          <div className="d-flex m-0">
            <div className="hostName infonom">
              <p>{premier}</p>
              <p>{deuxieme}</p>
            </div>

            <div className="col-md-6 image">
              <img
                className=" hostThumbnail"
                src={info.host.picture}
                alt={info.host.name}
              />
            </div>
          </div>
          <Stars className="etoiles" rating={info.rating} />
        </div>
      </div>
      <div className="collapse-advertise">
        <div className="col-sm-12 col-lg-6">
          <Collapse
            title="Description"
            content={[info.description]}
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <Collapse title="Équipements" content={info.equipments} />
        </div>
      </div>
    </div>
  );
}

export default Info