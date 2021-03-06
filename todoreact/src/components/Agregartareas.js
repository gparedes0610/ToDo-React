import React, { useState } from "react";

function Agregartareas({ setTareas, tareas }) {
  const [texto, setTexto] = useState("");
  const agregarTareaNueva = () => {
    setTareas([...tareas, texto]);
    setTexto("");
  };
  return (
    <div className='input-group mb-3"'>
      <input
        type="text"
        className="form-control"
        placeholder="AgregarTarea"
        aria-label="AgregarTarea"
        aria-describedby="button-addon2"
        value={texto}
        onChange={(e) => {
          setTexto(e.target.value);
        }}
      ></input>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={() => {
          agregarTareaNueva();
        }}
      >
        AgregarTarea
      </button>
    </div>
  );
}

export default Agregartareas;
