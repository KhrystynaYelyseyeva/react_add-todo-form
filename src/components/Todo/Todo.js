import React from 'react';
import { TodoShape } from '../../shapes/TodoShape';
import { User } from '../User/User';

import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <>
    <h3 className={completed
      ? 'item__title'
      : 'item__title item__title--completed'
    }
    >
      {title}
    </h3>
    <User user={user} completed={completed} />
  </>
);

Todo.propTypes = TodoShape;
