
export const addTodo = name => ({
  type: "ADD_TODO",
  id: +new Date(),
  name
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  id
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const clearTodos = () => ({
  type: "CLEAR_TODOS"
});
