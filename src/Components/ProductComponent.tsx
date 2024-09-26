import { useSelector } from "react-redux";
import { RootState } from "../Redux/Reducer/rootReducer";
import React, { useEffect, useState, Suspense } from "react";
import { fetchProducts } from "../Redux/Actions/ProductAction";
import { useAppDispatch } from "./hooks";
import { Card, Col, Row } from "react-bootstrap";
import "../Components/ProductComponent.css";

const Sidebar = React.lazy(() => import("./Sidebar"));
const LazyImage = React.lazy(() => import("./LazyImage"));
const ProductListPagination = React.lazy(() => import("./Pagination"));
const LearnerLoader = React.lazy(() => import("./Loader"));
const ProductTable = React.lazy(() => import("./ProductTable"));

const ProductComponent: React.FC = () => {
  const [skips, setSkips] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const productState = useSelector(
    (state: RootState) => state.product.productsArr
  );

  const { loading } = useSelector((state: RootState) => state.product);

  console.log(loading);

  const { products, skip, limit, total } = productState; // Destructure the properties

  console.log(productState);

  useEffect(() => {
    dispatch(fetchProducts(skips));
  }, [dispatch, skips]);

  useEffect(() => {
    if (loading === true) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [loading]);

  return (
    <div style={{ display: "flex" }}>
      <Suspense fallback={<div>Loading Sidebar...</div>}>
        <Sidebar />
      </Suspense>

      <div className="container mt-4" style={{ flex: 1, marginLeft: "261px" }}>
        <Suspense fallback={<div>Loading...</div>}>
          {isLoading ? <LearnerLoader /> : <ProductTable products={products} />}
        </Suspense>

        <Suspense fallback={<div>Loading Pagination...</div>}>
          <ProductListPagination
            setSkips={setSkips}
            total={total}
            limit={limit}
            skip={skip}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductComponent;
