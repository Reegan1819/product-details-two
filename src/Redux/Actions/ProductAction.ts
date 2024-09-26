import { ThunkAction } from "redux-thunk";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  Product,
  ProductActionTypes,
} from "../Types/ProductTypes";
import { RootState } from "../Reducer/rootReducer";

export const fetchProductsRequest = (): ProductActionTypes => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (prod: Product[]): ProductActionTypes => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: prod,
  };
};

export const fetchProductsFailure = (error: string): ProductActionTypes => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const productUpdateSuccess = (product: Product): ProductActionTypes => {
  return {
    type: "PRODUCT_UPDATE_SUCCESS",
    payload: product,
  };
};

export const productUpdateFailure = (error: string): ProductActionTypes => {
  return {
    type: "PRODUCT_UPDATE_FAILURE",
    payload: error,
  };
};

export const fetchProducts = (
  skip: number
): ThunkAction<void, RootState, unknown, ProductActionTypes> => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${skip}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      dispatch(fetchProductsSuccess(data));
    } catch (error: any) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};

export const updateProduct = (product: Product) => async (dispatch: any) => {
  console.log(product.id, "thunk");
  
  try {
    const response = await fetch(
      `https://dummyjson.com/products/${product.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product), // Ensure this has all updated fields
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update product");
    }

    // If you want to get the updated product from the response
    const updatedProduct = await response.json();
    dispatch(productUpdateSuccess(updatedProduct)); // Dispatch the updated product
  } catch (error: any) {
    dispatch(productUpdateFailure(error.message));
  }
};
