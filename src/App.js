import "./App.css";
import ListaDeTareas from "./componentes/ListaDeTareas";
import Principal from "./componentes/Principal";

function App() {
  return (
    <div className="aplicacion-tareas">
      <Principal />
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas  />
      </div>
    </div>
  );
}

export default App;
