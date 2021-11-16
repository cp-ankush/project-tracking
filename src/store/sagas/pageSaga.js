import { all, delay, takeEvery, put } from "@redux-saga/core/effects";
import { Types, createItem } from '../actions/items'

function* exampleSaga() {
  yield delay(2000);
  console.log("Example saga reached");
  yield put(createItem('data 1'))
}

export default function* rootSaga() {
  yield all([takeEvery(Types.CREATE_ITEM_REQUEST, exampleSaga)]);
}