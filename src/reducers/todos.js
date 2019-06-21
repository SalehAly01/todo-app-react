const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          name: action.name,
          id: action.id,
          isDone: false
        }
      ];
    case "REMOVE_TODO":
      const newState = state.filter(todo => todo.id !== action.id);
      return [...newState];
    case "TOGGLE_TODO":
      const newList = state.map(todo => {
        if (todo.id === action.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      return [...newList];
    case "CLEAR_TODOS":
      return [];
    default:
      return state;
  }
};
export default todos;
