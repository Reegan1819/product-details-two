export interface Product {
  id: number;
  title: string;
  // description: string;
  category: string;
  price: number;
  // discountPercentage: number;
  rating: number;
  // stock: number;
  availabilityStatus: string;
  thumbnail: string;
  // images: string[];
}

interface ProductsArr {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductState {
  productsArr: ProductsArr;
  loading: boolean;
  error: string | null;
}

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const PRODUCT_UPDATE_SUCCESS = "PRODUCT_UPDATE_SUCCESS";
export const PRODUCT_UPDATE_FAILURE = "PRODUCT_UPDATE_FAILURE";

interface FetchProductsRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload?: Product[];
}

interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
}

interface ProductUpdateSuccessAction {
  type: typeof PRODUCT_UPDATE_SUCCESS;
  payload: Product;
}

interface ProductUpdateFailureAction {
  type: typeof PRODUCT_UPDATE_FAILURE;
  payload: string;
}

export type ProductActionTypes =
  | FetchProductsRequestAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | ProductUpdateSuccessAction
  | ProductUpdateFailureAction;
