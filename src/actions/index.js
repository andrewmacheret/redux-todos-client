
import request from 'request-promise-native'

const apiBaseUrl = 'http://localhost:3001'

export const addTodo = async text => {
  const todo = (await request({
    uri: `${apiBaseUrl}/todos`,
    method: 'POST',
    json: true,
    body: {text, active: true}
  })).todo

  return {
    type: 'CREATE_TODO',
    todo: todo
  }
}

export const getTodos = async () => {
  const {todos} = await request({
    uri: `${apiBaseUrl}/todos`,
    method: 'GET',
    json: true
  })

  return {
    type: 'READ_TODOS',
    todos: todos
  }
}

export const toggleTodo = async ({id, text, active}) => {
  active = !active

  await request({
    uri: `${apiBaseUrl}/todos/${id}`,
    method: 'PUT',
    json: true,
    body: {text, active}
  })

  return {
    type: 'UPDATE_TODO',
    todo: {id, text, active}
  }
}

export const deleteTodo = async id => {
  await request({
    uri: `${apiBaseUrl}/todos/${id}`,
    method: 'DELETE',
    json: true
  })

  return {
    type: 'DELETE_TODO',
    id: id
  }
}

export const setVisibilityFilter = async filter => {
  return await {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
