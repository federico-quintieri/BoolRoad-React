import { useParams } from "react-router-dom";

export function RubricaList() {
  const { id } = useParams();

  return <h1>Sono pagina {id}</h1>;
}
