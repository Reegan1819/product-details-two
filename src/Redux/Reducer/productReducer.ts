import { ProductActionTypes, ProductState } from "../Types/ProductTypes";

const initialState: ProductState = {
  productsArr: {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
  loading: false,
  error: null,
};

export const productReducer = (
  state = initialState,
  action: ProductActionTypes
): ProductState => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        loading: false,
        productsArr: action.payload as any,

        error: null,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        loading: false,
        productsArr: {
          products: [],
          total: 0,
          skip: 0,
          limit: 0,
        },
        error: action.payload,
      };

    case "PRODUCT_UPDATE_SUCCESS":
      return {
        ...state,
        productsArr: {
          ...state.productsArr,
          products: state?.productsArr?.products?.map((product) =>
            product.id === action.payload.id ? action.payload : product
          ),
        },
        error: null,
      };
    case "PRODUCT_UPDATE_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
