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
    setPartecipanti(() => {
      // 🔹 Puliamo l'input: rimuoviamo spazi iniziali/finali e convertiamo tutto in minuscolo
      const searchQuery = inputValue.trim().toLowerCase().replace(/\s+/g, "");

      // 🔹 Se l'input è vuoto, mostriamo tutti i contatti senza filtrarli
      if (!searchQuery) return partecipanti;

      return partecipanti.filter(({ nome, cognome }) => {
        // 🔹 Creiamo due possibili versioni del nome completo:
        const fullName = `${nome}${cognome}`.toLowerCase(); // "MarioRossi"
        const invertedFullName = `${cognome}${nome}`.toLowerCase(); // "RossiMario"

        // 🔹 Controlliamo se l'input corrisponde a una delle due versioni
        return (
          fullName.includes(searchQuery) || // Match con "MarioRossi"
          invertedFullName.includes(searchQuery) // Match con "RossiMario"
        );
      });
    });
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
      <div className="min-vh-100">
        {/* Searchbar contatto */}
        <div>
          <label htmlFor="" className="form-label" >
            Cerca contatto{" "}
            <input type="text" className="form-control" value={inputValue} onChange={handleOnChange} />
          </label>
          <button className="btn btn-primary" style={{ marginLeft: '10px',marginBottom: '6px' }} onClick={handleOnClick}>Cerca</button>
        </div>


        {/* Map dei contatti */}
        {partecipanti &&
          partecipanti.map((p) => (
            <div className="mt-5"
              key={p.id}
              onClick={() => handleCardClick(p)}
              style={{ cursor: "pointer" }}
            >
              <CardContatto viaggiatore={p} />
            </div>
          ))}

        {/* Modale Bootstrap */}
        {selectedContact && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ background: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog mt-5">
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
                    viaggiatore={selectedContact}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
