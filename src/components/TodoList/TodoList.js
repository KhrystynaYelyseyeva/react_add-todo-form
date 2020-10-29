import React from 'react';
import PropTypes from 'prop-types';
import { TodoShape } from '../../shapes/TodoShape';
import { Todo } from '../Todo/Todo';

import './TodoList.scss';

export const TodoList = ({ todoList }) => (
  <ul className="list">
    {
      todoList.map(todo => (
        <li
          className={todo.completed
            ? 'list__item item item--completed'
            : 'list__item item'
          }
          key={todo.id}
        >
          <Todo {...todo} />
        </li>
      ))
    }
  </ul>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(TodoShape).isRequired,
};
