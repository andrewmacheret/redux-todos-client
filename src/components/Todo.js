import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onDeleteClick, active, text }) => (
  <span>
    <li
      onClick={onClick}
      style={{
        textDecoration: active ? 'none' : 'line-through'
      }}
    >
      {text}
    </li>
    <a
      href="##"
      onClick={onDeleteClick}
      style={{
        marginLeft: '100px'
      }}
    >
      [x]
    </a>
  </span>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
