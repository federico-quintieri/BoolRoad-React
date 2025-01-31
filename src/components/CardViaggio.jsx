import { Link } from "react-router-dom";
export function CardViaggio({
  id,
  destinazione,
  durata,
  prezzo,
  tipo,
  partenza,
}) {
  return (
    <div >
      <h3>{destinazione}</h3>
      <p>{durata}</p>
      <p>{prezzo}</p>
      <p>{tipo}</p>
      <p>{partenza}</p>
      <Link to={`/contatti/${id}`}>Partecipanti</Link>
    </div>
  );
}
