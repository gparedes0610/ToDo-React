import React from "react";

function Mostrartareas({ tareas, setTareas }) {
  const eliminarTarea = (indice) => {
    tareas.splice(indice, 1);
    setTareas([...tareas]);
  };
  return (
    <ul className="list-group d-flex justify-content-between align-items-center">
      {tareas.map((tarea, index) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center w-100"
          key={index}
        >
          {tarea}
          <button
            className="btn btn-danger"
            onClick={() => {
              eliminarTarea(index);
            }}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Mostrartareas;
