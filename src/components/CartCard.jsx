import React, { useState, useContext } from "react";
import styles from "../styles/CartCard.module.css"; 
import { UserContext } from "../App";

function CartCard() {
  const { product } = useContext(UserContext);
  const [quantities, setQuantities] = useState(product.map(() => 1));

  const addQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const removeQuantity = (index) => {
    if (quantities[index] > 1) {
      const newQuantities = [...quantities];
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  return (
    <div className="container">
      {product.map((e, i) => {
        const discountPrice = Math.round(e.price * (e.discountPercentage / 100));

        return (
          <div key={i} className="card mb-3 shadow">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={e.image}
                  className="img-fluid rounded-start cardImage"
                  alt="Product"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">Brand: {e.brand}</p>
                  <p className="card-text">Description: {e.description}</p>
                  <p className="card-text">Rating: {e.rating}/5</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 4 mins ago
                      </small>
                    </p>
                    <div className="d-flex align-items-center">
                      <button
                        type="button"
                        className={`btn btn-outline-danger btn-sm me-2 ${styles["amazon-button"]}`} // Applying Amazon style to decrease button
                        onClick={() => removeQuantity(i)}
                      >
                        <i className="bi bi-dash"></i>
                      </button>
                      <div className="quantity-text me-2">
                        {quantities[i]}
                      </div>
                      <button
                        type="button"
                        className={`btn btn-outline-success btn-sm ${styles["amazon-button"]}`} // Applying Amazon style to increase button
                        onClick={() => addQuantity(i)}
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text">
                      Original Price (1 item): ${e.price}
                    </p>
                    <p className="card-text text-success">
                      Discount Offer: {e.discountPercentage}%
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text">
                      Final Price (Price - Discount): $
                      {e.price - discountPrice}
                    </p>
                    <p className="card-text">
                      Total Amount: ${e.price * quantities[i]}
                    </p>
                  </div>
                  <button
                    type="button"
                    className={`btn btn-primary float-end mt-3 ${styles["amazon-style-btn"]}`}
                  >
                    Proceed to pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartCard;
