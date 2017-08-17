import React from 'react';
import R from 'ramda';

const Container = children => (<div className="panel panel-default">
  <div className="panel-body">
    {children}
  </div>
</div>);

const List = children => (<ul>
  {children}
</ul>);

const ListItem = ({id, text}) => (
  <li key={id}><span>{text}</span></li>
)

//const TodoList = R.compose(R.map(ListItem), R.prop('todos'));
const TodoList = R.compose( List, R.map(ListItem), R.prop('todos'));

export default TodoList;
