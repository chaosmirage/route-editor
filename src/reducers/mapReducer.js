import { handleActions } from 'redux-actions';
import { setCenter } from '../actions';

const initialState = {
  center: [55.75, 37.57],
  zoom: 9,
};

export default handleActions({
  [setCenter](state, { payload: center }) {
    return { ...state, center };
  },
}, initialState);
