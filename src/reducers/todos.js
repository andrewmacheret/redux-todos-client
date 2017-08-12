const todos = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return [ ...state, action.todo ]

    case 'READ_TODOS':
      return action.todos

    case 'UPDATE_TODO':
      return state.map(todo =>
        (todo.id === action.todo.id) ? action.todo : todo
      )

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)

    default:
      return state
  }
}

export default todos
