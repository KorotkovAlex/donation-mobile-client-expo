// import { createStore } from 'redux';
// import reducer from '../reducers';

// const store = createStore(reducer);
//
// export default store;
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import reducer from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav.navReducer);

const store = createStore(
  reducer,
  applyMiddleware(navigationMiddleware, sagaMiddleware)
);

export default store;

sagaMiddleware.run(sagas);
