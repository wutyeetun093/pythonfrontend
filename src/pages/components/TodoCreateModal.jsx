import React from 'react';
import { Modal } from 'rsuite';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createTodo, getTodoList } from '../../services/todo/todoAction';
import TodoForm from './TodoForm';

const formName = 'FashionCreateForm';

const TodoCreateModal = props => {
  const { isShow, onClose } = props;
  const onFormSubmit = data => {
    props.createTodo(data, () => {
      props.getTodoList();
      props.onClose();
      props.reset();
    });
  };
  return (
    <Modal show={isShow} onHide={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>Fashion Create</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TodoForm onClose={onClose} onFormSubmit={onFormSubmit} {...props} />
      </Modal.Body>
    </Modal>
  );
};

export default connect(null, { createTodo, getTodoList })(
  reduxForm({ form: formName })(TodoCreateModal)
);
