import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Agregartareas from "./components/Agregartareas";
import Mostrartareas from "./components/Mostrartareas";

function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <>
      <div className="container mt-5">
        <Agregartareas tareas={tareas} setTareas={setTareas} />
        <Mostrartareas tareas={tareas} />
      </div>
    </>
  );
}

export default App;
