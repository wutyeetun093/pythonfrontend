import _ from 'lodash';
import { GET_TODO_LIST, UPDATE_TODO_LIST } from './todoActionType';

const defaultState = {
  data: {},
  hasError: false,
  isPending: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_TODO_LIST: {
      if (action.meta && action.meta.isPending) {
        return state;
      }
      if (action.error) {
        return { ...state, hasError: true };
      }

      return {
        ...state,
        data: _.keyBy(action.payload, 'id'),
        hasError: false,
        isPending: action.meta.isPending,
      };
    }

    case UPDATE_TODO_LIST: {
      if (action.meta && action.meta.isPending) {
        return state;
      }
      if (action.error) {
        return { ...state, hasError: true };
      }

      return {
        ...state,
        data: { ...state.data, ..._.keyBy([action.payload], 'id') },
        hasError: false,
        isPending: action.meta.isPending,
      };
    }

    default:
      return state;
  }
};
