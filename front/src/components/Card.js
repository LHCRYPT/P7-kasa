import "./Card.css";
import { useNavigate } from "react-router-dom";

// props : logement (envoyer depuis Home.js)
export default function Card({ logement }) {
  const navigate = useNavigate();
  
  function naviguer() {
    navigate(`/logement/${logement.id}`);
  }
  return (
    <div>
      <Link to={`/logement/${data.id}`}> {/*  id du logement */}
        <img src={data.image} className="img-card" />
        <p className="titre-card">{data.title}</p>
      </Link>
    </div>
  );
}

export default Card;
