import { useEffect } from "react"
import { mostrarCargando, ocultarCargando } from "./utils/Util";

function App() {

  useEffect(() => {
    mostrarCargando();

    setTimeout(() => {
      ocultarCargando();
    }, 3000);
  }, []);

  return (
    // se debe renderizar el login inicialmente luego se redirecciona a la pagina de inicio
    <h1>hola</h1>
  )
}

export default App
