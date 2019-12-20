import api from 'axios-flow';
import { API_URL } from '../../variables/constants';
import {
  GET_TODO_LIST,
  CREATE_TODO_LIST,
  DELETE_TODO_LIST,
  UPDATE_TODO_LIST,
} from './todoActionType';

const URL = `${API_URL}/api/todos`;
export const getTodoList = queries => dispatch => {
  api(dispatch)
    .url(URL)
    .action(GET_TODO_LIST)
    .params(queries)
    .get();
};

export const createTodo = (data, onSuccess) => dispatch => {
  api(dispatch)
    .url(`${URL}/`)
    .action(CREATE_TODO_LIST)
    .onSuccess(onSuccess)
    .data(data)
    .post();
};

export const deleteTodo = (todoId, onSuccess) => dispatch => {
  api(dispatch)
    .url(`${URL}/${todoId}`)
    .action(DELETE_TODO_LIST)
    .onSuccess(onSuccess)
    .delete();
};

export const updateTodo = (todoId, data, onSuccess) => dispatch => {
  api(dispatch)
    .url(`${URL}/${todoId}/`)
    .action(UPDATE_TODO_LIST)
    .data(data)
    .onSuccess(onSuccess)
    .update();
};
