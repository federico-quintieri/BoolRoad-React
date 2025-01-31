export function CardContatto({ nome, cognome, viaggio_id }) {
  return (
    <>
      <h1>{viaggio_id}</h1>
      <h2>
        {nome} {cognome}
      </h2>
    </>
  );
}
