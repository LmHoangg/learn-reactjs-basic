import {
  SET_TODO_INPUT,
  ADD_TODO,
  DEL_TODO,
  SET_TODO,
  REPAIR_TODO
} from "./constants";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload
});
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload
});
export const delTodo = (payload) => ({
  type: DEL_TODO,
  payload
});
export const setTodo = (payload) => ({
  type: SET_TODO,
  payload
});
export const repairTodo = (payload, value) => ({
  type: REPAIR_TODO,
  payload,
  value
});
