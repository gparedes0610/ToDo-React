import React from "react";

function Mostrartareas({ tareas }) {
  return (
    <ul className="list-group">
      {tareas.map((tarea, index) => (
        <li key={index} className="list-group-item">
          {tarea}
        </li>
      ))}
    </ul>
  );
}

export default Mostrartareas;
