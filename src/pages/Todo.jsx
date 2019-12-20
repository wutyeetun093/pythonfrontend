import React, { useEffect } from 'react';
import { getTodoList } from '../services/todo/todoAction';
import { connect } from 'react-redux';
import TodoActionBar from './components/TodoActionBar';
import TodoTable from './components/TodoTable';

const Todo = props => {
  useEffect(() => {
    const getAllTodo = props.getTodoList;
    getAllTodo();
  }, [props.getTodoList]);
  return (
    <>
      <TodoActionBar></TodoActionBar>
      <TodoTable todo={props.todo}></TodoTable>
    </>
  );
};

const mapStateToProps = ({ todo }) => ({
  todo: todo && todo.data,
  isPending: todo.isPending,
  paginations: todo && todo.paginations,
});

export default connect(mapStateToProps, { getTodoList })(Todo);
