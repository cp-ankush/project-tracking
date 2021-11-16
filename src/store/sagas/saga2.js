import { all, delay, takeEvery } from "@redux-saga/core/effects";
import { Types } from '../actions/items'

function* exampleSaga() {
  yield delay(2000);
  console.log("Example 2 saga reached");
}

export default function* rootSaga() {
  yield all([takeEvery(Types.DELETE_ITEM, exampleSaga),]);
}