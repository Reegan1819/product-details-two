import React from "react";
import { Table } from "react-bootstrap";
import TitleModal from "./TitleModal";
import "./productTable.css";

interface Product {
  id: number;
  title: string;
  category: string;
  availabilityStatus: string;
  price: number;
  rating: number;
  thumbnail: string;
  tags?: [];
  description?: string;
  discountPercentage?: number;
  shippingInformation?: string;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );

  const [localProducts, setLocalProducts] = React.useState<Product[]>(products);

  const handleTitleClick = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  return (
    <div className="d-flex justify-content-center row">
      <TitleModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        products={localProducts}
        setProducts={setLocalProducts}
      />
      <div className="col-md-10">
        <h3 className="mb-4">Products</h3>
        {Array.isArray(products) &&
          products.length > 0 &&
          products.map((product) => {
            const {
              title,
              id,
              category,
              tags,
              description,
              price,
              discountPercentage = 0,
              shippingInformation,
              thumbnail,
            } = product;
            const discount = Number((price / 100) * discountPercentage);
            const actualPrice = Number(price - discount).toFixed(2);
            return (
              <div key={id} className="row p-2 bg-white border rounded">
                <div className="col-md-3 mt-1">
                  <img
                    className="img-fluid img-responsive rounded product-image"
                    src={thumbnail}
                  />
                </div>
                <div className="col-md-6 mt-1">
                  <h5 onClick={()=>handleTitleClick(product)}>{title}</h5>
                  <div className="d-flex flex-row">
                    <span>{category}</span>
                  </div>
                  <div className="mt-1 mb-1 spec-1">
                    {Array.isArray(tags) &&
                      tags.map((tag, idx) => (
                        <React.Fragment key={idx}>
                          <span>{tag}</span>
                          <span className="dot"></span>
                        </React.Fragment>
                      ))}
                  </div>
                  <p className="text-justify text-truncate para mb-0">
                    {description}
                    <br />
                    <br />
                  </p>
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                  <div className="d-flex flex-row align-items-center">
                    <h4 className="mr-1">${actualPrice}</h4>
                    <span className="strike-text">${price}</span>
                  </div>
                  <h6 className="text-success">{shippingInformation}</h6>
                  <div className="d-flex flex-column mt-4">
                    <button className="btn btn-primary btn-sm" type="button" onClick={()=>handleTitleClick(product)}>
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductTable;
