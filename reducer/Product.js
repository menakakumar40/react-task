import {
  GET_PRODUCT_LIST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_SEARCH_FILTER
} from "../actionType/Product";

export default (
  startingState = {
    products: [],
    Loading: true,
    value: "",
    filterItem: [],
    searchTerm: ""
  },
  action
) => {
  console.log(action.type);
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return { ...startingState, Loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { ...startingState, Loading: false, products: action.products };
    case PRODUCT_LIST_FAIL:
      return { ...startingState, Loading: true, error: action.error };
    case PRODUCT_SEARCH_FILTER:
      return {
        ...startingState,
        Loading: false,
        filterItem: action.products.filter(function(item) {
          return (
            item.title.toLowerCase().search(action.searchTerm.toLowerCase()) !==
            -1
          );
        })
      };
    default:
      return startingState;
  }
};
