import React from 'react';
import { Modal } from 'rsuite';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { updateTodo, getTodoList } from '../../services/todo/todoAction';
import TodoForm from './TodoForm';

const formName = 'tagUpdateForm';
const TodoUpdateModal = props => {
  const { isShow, onClose, initialValues } = props;
  const onFormSubmit = data => {
    console.log('hhhh', data);

    props.updateTodo(data.id, data, () => {
      props.getTodoList();
      onClose();
      props.reset();
    });
  };

  return (
    <Modal show={isShow} onHide={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>Todo Update</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TodoForm {...props} onFormSubmit={onFormSubmit} todo={initialValues} />
      </Modal.Body>
    </Modal>
  );
};

export default connect(null, { updateTodo, getTodoList })(
  reduxForm({ form: formName, enableReinitialize: true })(TodoUpdateModal)
);
