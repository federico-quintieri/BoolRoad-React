import { CardViaggio } from "../components/CardViaggio";
import { useState } from "react";
import { viaggi } from "../data";
import { useEffect } from "react";

// Filter delle card dei viaggi
export function ViaggiList() {
  const [vacanze, setVacanze] = useState(viaggi);

  // Al mount del componente filtro l'array preso da backend
  useEffect(() => {
    setVacanze((prev_v) =>
      prev_v.filter((vacanza) => vacanza.partenza === "Oggi")
    );
  }, []);

  return (
    <>
      <div className="min-vh-100">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" >
          {/* Filter di vacanze per generare card */}
          {vacanze &&
            vacanze.map((vacanza) => (
              <div className="col mb-5" key={vacanza.id}>
                <CardViaggio
                  destinazione={vacanza.destinazione}
                  durata={vacanza.durata}
                  id={vacanza.id}
                  partenza={vacanza.partenza}
                  prezzo={vacanza.prezzo}
                  tipo={vacanza.tipo}
                  key={vacanza.id}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
