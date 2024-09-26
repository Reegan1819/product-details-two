import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAppDispatch } from "./hooks";
import { updateProduct } from "../Redux/Actions/ProductAction";
import { Product } from "../Redux/Types/ProductTypes";

interface TitleModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProduct: Product | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const TitleModal = ({
  showModal,
  setShowModal,
  selectedProduct,
  setSelectedProduct,
  products,
  setProducts,
}: TitleModalProps) => {
  const handleCloseModal = () => setShowModal(false);

  const dispatch = useAppDispatch();

  const handleSaveChanges = () => {
    if (selectedProduct) {
      // Update the local state immediately
      const updatedProducts = products.map((product) =>
        product.id === selectedProduct.id
          ? { ...product, ...selectedProduct }
          : product
      );
      setProducts(updatedProducts); // Update the products state
      const payload = {
        id: selectedProduct.id,
        title: selectedProduct.title,
        category: selectedProduct.category,
        price: selectedProduct.price,
        availabilityStatus: selectedProduct.availabilityStatus,
        rating: selectedProduct.rating,
        thumbnail: selectedProduct.thumbnail,
      };
      dispatch(updateProduct(payload));

      // Optionally, dispatch the API update
      // dispatch(updateProduct(selectedProduct));
    }
    handleCloseModal();
  };
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedProduct.title}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      title: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedProduct.category}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      category: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedProduct.price}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      price: Number(e.target.value),
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Availability Status</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedProduct.availabilityStatus}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      availabilityStatus: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedProduct.rating}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      rating: Number(e.target.value),
                    })
                  }
                />
              </Form.Group>
              {/* <Form.Group>
                <Form.Label>Thumbnail</Form.Label>
                <img src={selectedProduct.thumbnail} alt="thumbnail" />
              </Form.Group> */}
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TitleModal;
