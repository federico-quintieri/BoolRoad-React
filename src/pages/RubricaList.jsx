import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { contatti } from "../data";
import { CardContatto } from "../components/CardContatto";

export function RubricaList() {
  // Prendo parametro url viaggioId che è una stringa
  const { viaggioId } = useParams();

  // Facciamo uno state per il modale
  const [selectedContact, setSelectedContact] = useState(null);

  // Metto in array state l'array di contatti preso da backend
  const [partecipanti, setPartecipanti] = useState(contatti);

  // Valore input state
  const [inputValue, setInputValue] = useState("");

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

  // Apri il modale con i dettagli del contatto
  const handleCardClick = (contatto) => {
    setSelectedContact(contatto);
  };

  // Chiudi il modale
  const closeModal = () => {
    setSelectedContact(null);
  };


  return (
    <>
      {/* Searchbar contatto */}
      <label htmlFor="">
        Cerca contatto{" "}
        <input type="text" value={inputValue} onChange={handleOnChange} />
      </label>
      <button onClick={handleOnClick}>Cerca</button>

      {/* Map dei contatti */}
      {partecipanti &&
        partecipanti.map((p) => (
          <div
            key={p.id}
            onClick={() => handleCardClick(p)}
            style={{ cursor: "pointer" }}
          >
            <CardContatto nome={p.nome} cognome={p.cognome} />
          </div>
        ))}

      {/* Modale Bootstrap */}
      {selectedContact && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Dettagli Contatto</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <CardContatto
                  breve={false}
                  nome={selectedContact.nome}
                  cognome={selectedContact.cognome}
                  sesso={selectedContact.sesso}
                  citta={selectedContact.citta}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
