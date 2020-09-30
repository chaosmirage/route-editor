import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const defaultInitialState = {};

const devToolsOptions = {
  trace: true,
};

export default function configureStore(preloadedState = defaultInitialState) {
  const composedEnhancers = composeWithDevTools(devToolsOptions);

  const store = createStore(rootReducer, preloadedState, composedEnhancers());

  return store;
};
