import { createSelectorCreator, defaultMemoize, createSelector } from 'reselect';
import { identity, isEqual, map } from 'lodash';

const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual,
);

const getMapState = (state) => state.map;
const getMapCenter = (state) => state.map.center;
const getPoints = state => state.points;

export const mapCenterSelector = createDeepEqualSelector(
  getMapCenter,
  identity,
);

export const mapStateSelector = createDeepEqualSelector(
  getMapState,
  identity,
);

export const pointsSelector = createSelector(
  getPoints,
  identity,
);

export const pointsCoordinatesSelector = createSelector(
  getPoints,
  (points) => map(points, 'coordinates'),
);
