export function CardContatto({ breve = true, nome, cognome, sesso, citta }) {
  return (
    <>
      {breve ? (
        <div>
          <h2>
            {nome} {cognome}
          </h2>
        </div>
      ) : (
        <div>
          <h2>
            {nome} {cognome}
          </h2>
          <p>{sesso}</p>
          <p>{citta}</p>
        </div>
      )}
    </>
  );
}
