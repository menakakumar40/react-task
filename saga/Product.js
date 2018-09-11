import { call, put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_LIST } from "../actionType/Product";
import { productListSuccess, productListFail } from "../actionCreator/Product";

function* getProductDetailsData(action) {
  try {
    let products = yield fetch("https://api.myjson.com/bins/1a3mh4").then(r =>
      r.json()
    );
    yield put(productListSuccess(products));
  } catch (error) {
    yield put(productListFail(error));
  }
}

export default function* productDetailsagas() {
  yield takeLatest(GET_PRODUCT_LIST, getProductDetailsData);
}
