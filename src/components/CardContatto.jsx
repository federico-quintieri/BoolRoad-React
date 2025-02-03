export function CardContatto({ breve = true, viaggiatore }) {

  const {nome, cognome, sesso, citta, contattoEmergenza, esigenzeAlimentari, gruppoSanguigno, allergie, codiceFiscale, documenti, eta, email, telefono}=viaggiatore
  return (
    <>
      <div>
        {breve ? (
          <div>
            <h2>
              {nome} {cognome}
            </h2>
            <p className="my-1">{telefono}</p>
            <p className="my-1">{email}</p>
          </div>
        ) : (
          <div>
            <h2>
              {nome} {cognome}
            </h2>
            <p className="my-1">{telefono}</p>
            <p className="my-1">{email}</p>
            <p className="my-1">{sesso}, {eta} anni</p>
            <p className="my-1">Codice Fiscale: {codiceFiscale}</p>
            <p className="my-1">{documenti}</p>
            <p className="my-1">Città: {citta}</p> 
            <p className="my-1"><strong>Gruppo sanguiggno:</strong> {gruppoSanguigno}</p> 
            <p className="my-1"><strong>Esigenze Alimentari:</strong> {esigenzeAlimentari}</p>  
            <p className="my-1"><strong>Allergie:</strong> {allergie}</p> 
            <hr/>
            <h5 className="mt-1">Contatto di Emergenza</h5>
            <p className="my-1">{contattoEmergenza.relazione}</p> 
            <p className="my-1">{contattoEmergenza.nome}</p> 
            <p className="my-1">{contattoEmergenza.numeroDiTelefono}</p>
          </div>
        )}
      </div>
    </>
  );
}
