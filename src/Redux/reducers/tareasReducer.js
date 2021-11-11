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

const initialState = {
  tareas: [],
  error: null,
  loading: false,
  tareaeliminar: null,
  tareaeditar: {}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_TAREA:
      return {
        ...state,
        loading: action.payload,
      };

    case AGREGAR_TAREA_OK:
      return {
        ...state,
        loading: false,
          tareas: [...state.tareas, action.payload],
      };

    case AGREGAR_TAREA_ERROR:
    case OBTENER_TAREAS_ERROR:
    case ELIMINAR_TAREA_ERROR:
    case EDITAR_TAREA_ERROR:
      return {
        ...state,
        loading: false,
          error: action.payload,
      };

    case OBTENER_TAREAS:
      return {
        ...state,
        tareas: action.payload,
          error: null
      }

      case ELIMINAR_TAREA:
        return {
          ...state,
          tareaeliminar: action.payload
        }

        case ELIMINAR_TAREA_OK:
          return {
            ...state,
            tareas: state.tareas.filter(tarea => tarea.id !== state.tareaeliminar),
              tareaeliminar: null
          }

          case EDITAR_TAREA:
            return {
              ...state,
              tareaeditar: action.payload
            }

            case EDITAR_TAREA_OK:
              return {
                ...state,
                tareaeditar: null,
                  tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? tarea = action.payload : tarea)
              }

              default:
                return state;
  }
}