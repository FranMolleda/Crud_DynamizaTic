import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionEdicionTarea } from "../Redux/actions/tareasAction";
import { useHistory } from "react-router-dom";

const EditarTarea = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [tarea, setTarea] = useState({
    nombre: "",
    estimacion: "",
  });

  const tareaEditar = useSelector((state) => state.tareas.tareaeditar);

  useEffect(() => {
    setTarea(tareaEditar);
  }, [tareaEditar]);

  const onChangeForm = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, estimacion } = tarea;

  const submitEditarTarea = (e) => {
    e.preventDefault();

    dispatch(actionEdicionTarea(tarea));

    history.push("/");
  };
  return (
    <div className="justify-content-center col-md-8">
      <h2 className="text-center mb-4"> Editar Tarea</h2>{" "}
      <form onSubmit={submitEditarTarea}>
        <div className="agregar-form">
          <label> Nombre Tarea </label>{" "}
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={onChangeForm}
          />
        </div>{" "}
        <div className="agregar-form">
          <label> Finalizar Tarea </label>{" "}
          <input
            type="number"
            value={estimacion}
            name="estimacion"
            onChange={onChangeForm}
          />
        </div>{" "}
        <div className="agregar-button mt-4">
          <button type="submit"> Guardar </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
};

export default EditarTarea;
