import {
  GET_TASKS,
  DELETE_TASK,
  ADD_TASK,
  GET_TASK,
  EDIT_TASK
} from "../actions/types";

const initialState = {
  tasks: [],
  task: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    case GET_TASK:
      return {
        ...state,
        task: action.payload
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? (task = action.payload) : task
        )
      };
    default:
      return state;
  }
}
