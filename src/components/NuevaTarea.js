import React, { useState } from "react";
import { actionCrearTarea } from "../Redux/actions/tareasAction";
import { useDispatch, useSelector } from "react-redux";

const NuevaTarea = ({ history }) => {
  const [nombre, setNombre] = useState("");
  const [estimacion, setEstimacion] = useState("");

  const dispatch = useDispatch();
  const agregarTarea = (tarea) => dispatch(actionCrearTarea(tarea));

  const error = useSelector((state) => state.tareas.error);

  const submitTarea = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || estimacion <= 0) {
      return;
    }

    agregarTarea({
      nombre,
      estimacion,
    });

    limpiarInputs();

    history.push("/");
  };

  const limpiarInputs = () => {
    setNombre("");
    setEstimacion("");
  };

  return (
    <div className="justify-content-center col-md-8">
      <h2 className="text-center mb-4"> Agregar Nueva Tarea </h2>{" "}
      <form onSubmit={submitTarea}>
        <div className="agregar-form">
          <label> Nombre Tarea </label>{" "}
          <input
            type="text"
            placeholder="Nombre Tarea"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />{" "}
        </div>{" "}
        <div className="agregar-form">
          <label> Número días </label>{" "}
          <input
            type="number"
            placeholder="Estimación días"
            name="estimacion"
            value={estimacion}
            onChange={(e) => setEstimacion(Number(e.target.value))}
          />{" "}
        </div>{" "}
        <div className="agregar-button mt-4">
          <button type="submit"> Agregar Tarea </button>{" "}
        </div>{" "}
      </form>{" "}
      {error ? (
        <p style={{ textAlign: "center", color: "red" }}>Hubo un error</p>
      ) : null}
    </div>
  );
};

export default NuevaTarea;
