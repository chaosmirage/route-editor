import { filter, reduce } from 'lodash';
import { handleActions } from 'redux-actions';
import {
  addPoint,
  deletePoint,
  updatePoint,
} from '../actions';

const initialState = [];

export default handleActions({
  [addPoint](state, { payload: point }) {
    return [...state, point ];
  },
  [deletePoint](state, { payload: id }) {
    return filter(state, ({ id: pointId }) => {
      return pointId !== id;
    });
  },
  [updatePoint](state, { payload: { id, attributes } }) {
    return reduce(state, (acc, point) => {
      if (point.id === id) {
        return [...acc, { ...point, ...attributes }];
      }

      return [...acc, point];
    }, []);
  },
}, initialState);
