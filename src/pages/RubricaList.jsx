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

  // Valore input state
  const [inputValue, setInputValue] = useState("");

  console.log(partecipanti);

  // Al mount del componente faccio filter dell'array contatti in base a viaggio_id
  useEffect(() => {
    setPartecipanti((prev_p) =>
      prev_p.filter(
        (curr_partecipante) =>
          curr_partecipante.viaggio_id === parseInt(viaggioId)
      )
    );
  }, []);

  // Callback che setta nuovo input a state
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  // Ad onClick setto partecipanti in base a valore input
  const handleOnClick = () => {
    // Setto nuovo array partecipanti facendo filter in base a nome == inputValue
    setPartecipanti(() =>
      contatti.filter((partecipante) =>
        (partecipante.nome + " " + partecipante.cognome)
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      )
    );
  };

  return (
    <>
      <label htmlFor="">
        Cerca contatto{" "}
        <input type="text" value={inputValue} onChange={handleOnChange} />
      </label>
      {/* <p>{inputValue}</p> */}
      <button onClick={handleOnClick}>Cerca</button>
      {partecipanti &&
        partecipanti.map((p) => (
          <CardContatto key={p.id} nome={p.nome} cognome={p.cognome} />
        ))}
    </>
  );
}

// {partecipanti && partecipanti.map()}
