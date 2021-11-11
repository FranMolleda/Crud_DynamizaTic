import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  actionEliminarTarea,
  actionObtenerTareaEditar,
} from "../Redux/actions/tareasAction";

const Tarea = ({ tarea }) => {
  const { nombre, estimacion, id } = tarea;
  const dispatch = useDispatch();
  const confirmarEliminarTarea = (id) => {
    dispatch(actionEliminarTarea(id));
  };

  const history = useHistory();

  const editarTarea = (tarea) => {
    dispatch(actionObtenerTareaEditar(tarea));
    history.push(`/tarea/editar/${tarea.id}`);
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>{estimacion} días</td>
      <td className="d-flex justify-content-around">
        <button type="button" onClick={() => editarTarea(tarea)}>
          Editar
        </button>
        <button
          onClick={() => confirmarEliminarTarea(id)}
          className="acciones-button-tbody"
          type="button"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Tarea;
