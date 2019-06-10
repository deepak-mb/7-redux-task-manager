import { GET_TASKS, DELETE_TASK, ADD_TASK, GET_TASK, EDIT_TASK } from "./types";
import axios from "axios";

// export const getTasks = () => {
//   return {
//     type: GET_TASKS
//   };
// };

export const getTasks = () => async dispatch => {
  await axios.get(`https://jsonplaceholder.typicode.com/todos`).then(res => {
    dispatch({
      type: GET_TASKS,
      payload: res.data
    });
  });
};

export const deleteTask = id => async dispatch => {
  await axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_TASK,
        payload: id
      });
    });
};

export const addTask = task => async dispatch => {
  await axios
    .post(`https://jsonplaceholder.typicode.com/todos/`, task)
    .then(res => {
      // console.log(res.data)
      dispatch({
        type: ADD_TASK,
        payload: res.data
      });
    });
};

export const getTask = id => async dispatch => {
  await axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      dispatch({
        type: GET_TASK,
        payload: res.data
      });
    });
};

export const editTask = task => async dispatch => {
  await axios
    .put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, task)
    .then(res => {
      dispatch({
        type: EDIT_TASK,
        payload: res.data
      });
    });
};
