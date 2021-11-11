import {
    AGREGAR_TAREA,
    AGREGAR_TAREA_OK,
    AGREGAR_TAREA_ERROR,
    OBTENER_TAREAS,
    OBTENER_TAREAS_ERROR,
    ELIMINAR_TAREA,
    ELIMINAR_TAREA_ERROR,
    ELIMINAR_TAREA_OK,
    EDITAR_TAREA,
    EDITAR_TAREA_ERROR,
    EDITAR_TAREA_OK,
    EDICION_TAREA
} from "../types";

import urlAxios from "../../config/axios.js"

export function actionCrearTarea(tarea) {
    return async (dispatch) => {
        dispatch(agregarTarea())
        try {
            await urlAxios.post("/tareas", tarea)
            dispatch(agregarTareaOk(tarea))
        } catch (error) {
            dispatch(agregartareaError(true))
        }
    }
}



const agregarTarea = () => ({
    type: AGREGAR_TAREA,
    payload: true
})

const agregarTareaOk = tarea => ({
    type: AGREGAR_TAREA_OK,
    payload: tarea
})

const agregartareaError = estado => ({
    type: AGREGAR_TAREA_ERROR,
    payload: estado
})


export function actionObtenerTareas() {
    return async (dispatch) => {

        try {
            const response = await urlAxios.get('/tareas')
            dispatch(obtenerTareas(response.data))
        } catch (error) {
            console.log(error)
            dispatch(obtenerTareasError(true))
        }
    }
}

const obtenerTareas = (productos) => ({
    type: OBTENER_TAREAS,
    payload: productos
})

const obtenerTareasError = (estado) => ({
    type: OBTENER_TAREAS_ERROR,
    payload: estado
})

export function actionEliminarTarea(id) {
    return async (dispatch) => {
        dispatch(obtenerTareaEliminar(id))
        try {
            await urlAxios.delete(`/tareas/${id}`)
            dispatch(eliminarTareaOk())

        } catch (error) {
            console.log(error)
            dispatch(eliminarTareaError(true))
        }
    }
}

const obtenerTareaEliminar = id => ({
    type: ELIMINAR_TAREA,
    payload: id
})

const eliminarTareaOk = () => ({
    type: ELIMINAR_TAREA_OK
})
const eliminarTareaError = (estado) => ({
    type: ELIMINAR_TAREA_ERROR,
    payload: estado
})

export function actionObtenerTareaEditar(tarea) {
    return (dispatch) => {
        dispatch(obtenerTareaEditar(tarea))
    }
}

const obtenerTareaEditar = tarea => ({
    type: EDITAR_TAREA,
    payload: tarea
})

export function actionEdicionTarea(tarea) {
    return async (dispatch) => {
        dispatch(editarTarea())

        try {
            await urlAxios.put(`/tareas/${tarea.id}`, tarea)
            dispatch(editarTareaExito(tarea))
        } catch (error) {

        }
    }
}

const editarTarea = () => ({
    type: EDICION_TAREA,
})

const editarTareaExito = tarea => ({
    type: EDITAR_TAREA_OK,
    payload: tarea
})