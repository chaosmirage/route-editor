import { ELEMENTS_NAMES } from '../../src/constants';

const {
  ADD_POINT_BUTTON,
  DELETE_LIST_ITEM_BUTTON,
  POINT_NAME_INPUT,
  POINTS_LIST_ITEM,
  MAP,
} = ELEMENTS_NAMES;

export default {
  mapSelector: () => `[data-test="${MAP}"]`,
  addPointButtonSelector: () => `[data-test="${ADD_POINT_BUTTON}"]`,
  deletePointButtonSelector: (id) => `[data-test="${DELETE_LIST_ITEM_BUTTON}-${id}"]`,
  pointNameInputSelector: () => `[data-test="${POINT_NAME_INPUT}"]`,
  pointsListItemSelector: (id) => `[data-test="${POINTS_LIST_ITEM}-${id}"]`,
};

