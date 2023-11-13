import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./catrgories/category.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
