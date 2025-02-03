import { CardViaggio } from "../components/CardViaggio";
import { useState } from "react";
import { viaggi } from "../data";
import { useEffect } from "react";

// Filter delle card dei viaggi
export function ViaggiList() {
  const [viaggioAttivo, setViaggioAttivo] = useState(viaggi);
  const [viaggioPianificato, setViaggioPianificato] = useState(viaggi);
  const [viaggioAvvenuto, setViaggioAvvenuto] = useState(viaggi);

  // Al mount del componente filtro l'array preso da backend
  useEffect(() => {
    setViaggioAttivo((prev_v) =>
      prev_v.filter((viaggioAttivo) => viaggioAttivo.status === "Attivo")
    );
    setViaggioPianificato((prev_v) =>
      prev_v.filter((viaggioPianificato) => viaggioPianificato.status === "Pianificato")
    );
    setViaggioAvvenuto((prev_v) =>
      prev_v.filter((viaggioAvvenuto) => viaggioAvvenuto.status === "Avvenuto")
    );
  }, []);

  return (
    <>
    <h2>Viaggi Attivi</h2>
      <div className="min-vh-100">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" >
          {/* Filter di vacanze per generare card */}
          {viaggioAttivo &&
            viaggioAttivo.map((vacanza) => (
              <div className="col mb-5" key={vacanza.id}>
                <CardViaggio vacanza={vacanza}/>
              </div>
            ))}
        </div>

        <h2>Viaggi Pianificati</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" >
          {/* Filter di vacanze per generare card */}
          {viaggioPianificato &&
            viaggioPianificato.map((vacanza) => (
              <div className={"col mb-5"} key={vacanza.id}>
                <CardViaggio vacanza={vacanza}/>
              </div>
            ))}
        </div>

        <h2>Viaggi Avvenuti</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" >
          {/* Filter di vacanze per generare card */}
          {viaggioAvvenuto &&
            viaggioAvvenuto.map((vacanza) => (
              <div className="col mb-5" key={vacanza.id}>
                <CardViaggio vacanza={vacanza}/>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
