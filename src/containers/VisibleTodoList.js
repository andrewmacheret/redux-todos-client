import { connect } from 'react-redux'
import { toggleTodo, getTodos, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => !todo.active)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => todo.active)
    default:
      throw new Error(`Unsupported filter: ${filter}`)
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  getTodos()
    .then(dispatch)
    .catch(console.error)

  return {
    onTodoClick: todo => {
      toggleTodo(todo)
        .then(dispatch)
        .catch(console.error)
    },
    onTodoDeleteClick: id => {
      deleteTodo(id)
        .then(dispatch)
        .catch(console.error)
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

VisibleTodoList.propTypes = {
}

export default VisibleTodoList
