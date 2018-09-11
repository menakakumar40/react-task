import {
  GET_PRODUCT_LIST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_SEARCH_FILTER
} from "../actionType/Product";

export function getProductList() {
  return {
    type: GET_PRODUCT_LIST
  };
}

export function productListSuccess(products) {
  return {
    type: PRODUCT_LIST_SUCCESS,
    products
  };
}

export function productListFail(error) {
  return {
    type: PRODUCT_LIST_FAIL,
    error
  };
}
export function productSearchFilter(searchTerm, products) {
  return {
    type: PRODUCT_SEARCH_FILTER,
    searchTerm,
    products
  };
}
