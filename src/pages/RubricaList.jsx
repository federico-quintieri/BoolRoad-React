import { useParams } from "react-router-dom";

export function RubricaList() {
  const { viaggioId } = useParams();

  return <h1>Sono pagina {id}</h1>;
}
