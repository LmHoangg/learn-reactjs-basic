import {
  SET_TODO_INPUT,
  ADD_TODO,
  DEL_TODO,
  SET_TODO,
  REPAIR_TODO
} from "./constants";

const initState = {
  todos: [],
  todoInput: ""
};
function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DEL_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodos
      };
    case SET_TODO:
      return {
        ...state,
        todoInput: action.payload
      };
    case REPAIR_TODO:
      const newTodos2 = [...state.todos];
      newTodos2.splice(action.payload, 1, action.value);
      return {
        ...state,
        todos: newTodos2
      };
    default:
      throw new Error("Invalid action...");
  }
}

export { initState };
export default reducer;
