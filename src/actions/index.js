import { createAction } from 'redux-actions';

export const setCenter = createAction('SET_CENTER');

export const addPoint = createAction('ADD_POINT');
export const deletePoint = createAction('DELETE_POINT');
export const updatePoint = createAction('UPDATE_POINT');
