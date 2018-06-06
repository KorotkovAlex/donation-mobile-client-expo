import { fork, all } from 'redux-saga/effects';

function *saga() {
  yield all([]);
}

export default saga;
