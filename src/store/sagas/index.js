

import { spawn } from "@redux-saga/core/effects";
import pageSaga from "./pageSaga"
import saga2 from "./saga2"

export default function* rootSaga() {
  yield spawn(pageSaga)
  yield spawn(saga2)
}
