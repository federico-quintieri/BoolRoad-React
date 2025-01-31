import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { contatti } from "../data";
import { CardContatto } from "../components/CardContatto";

export function RubricaList() {
  // Prendo parametro url viaggioId che è una stringa
  const { viaggioId } = useParams();

  // Metto in array state l'array di contatti preso da backend
  const [partecipanti, setPartecipanti] = useState(contatti);

  console.log(partecipanti);

  // Al mount del componente faccio filter dell'array contatti in base a viaggio_id
  useEffect(() => {
    setPartecipanti((prev_p) =>
      prev_p.filter((p) => p.viaggio_id === parseInt(viaggioId))
    );
  }, []);

  return (
    <>
      {partecipanti &&
        partecipanti.map((p) => (
          <CardContatto
            key={p.id}
            nome={p.nome}
            cognome={p.cognome}
            viaggio_id={p.viaggio_id}
          />
        ))}
    </>
  );
}

// {partecipanti && partecipanti.map()}
