import { Link } from "react-router-dom";
export function CardViaggio({
  id,
  destinazione,
  durata,
  prezzo,
  tipo,
  partenza,
  immagine
}) {
  return (
    <>
      <div className="card h-100 d-flex">
            <img src={immagine} className="card-img-top" alt={`Immagine non trovata`} />
            <div className="card-body text-center">
                <h5 className="card-title">{destinazione}</h5>
                <p className="card-text">{tipo}</p>
                <p className="card-text">Prezzo: {prezzo}€</p>
                <p className="card-text">Durata: {durata}</p>
                <Link className="btn btn-primary" to={`/contatti/${id}`}>Mostra Partecipanti</Link>
            </div>
        </div>
    </>
  );
}
