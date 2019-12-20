import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import todoReducer from '../services/todo/todoReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    todo: todoReducer,
    form,
  });
