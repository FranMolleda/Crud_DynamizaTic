/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { actionObtenerTareas } from "../Redux/actions/tareasAction";
import { useDispatch, useSelector } from "react-redux";
import Tarea from "../components/Tarea";

const Tareas = () => {
  const dispatch = useDispatch();
  const tareasBd = () => dispatch(actionObtenerTareas());
  const tareas = useSelector((state) => state.tareas.tareas);
  const error = useSelector((state) => state.tareas.error);

  useEffect(() => {
    tareasBd();
    /* eslint-disable */
  }, []);
  return (
    <Fragment>
      <h1
        className="justify-content-center"
        style={{
          display: "flex",
        }}
      >
        Listado Tareas
      </h1>
      {error ? (
        <p style={{ color: "red", textAlign: "center" }}>Hubo un error</p>
      ) : null}
      <div className="d-flex justify-content-around">
        <table
          className="mt-5"
          style={{
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Estimación</th>
              <th className="d-flex justify-content-center" scope="col">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {tareas.length === 0 ? (
              <tr>
                <td>No hay Tareas</td>
              </tr>
            ) : (
              tareas.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Tareas;
