import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Agregartareas from "./components/Agregartareas";
import Mostrartareas from "./components/Mostrartareas";

function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <>
      <div className="container mt-5">
        <Agregartareas setTareas={setTareas} tareas={tareas} />
        <Mostrartareas tareas={tareas} setTareas={setTareas} />
      </div>
    </>
  );
}

export default App;
