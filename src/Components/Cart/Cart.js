import React from "react";
import { Link } from "react-router-dom";
import useHandleCart from "../../Hooks/useHandleCart";
import { removeFromDb } from "../../Utilities/localStorageDB";

const Cart = () => {
  const { productCart } = useHandleCart();
  const removeItem = (id) =>{
    removeFromDb(id)
    window.location.reload();

  }
  removeFromDb()
  return (
    <div>
      <div className="container">
        {productCart.map((product) => (
          <div className="row my-4" key={product.id}>
            <div className="col-md-6 col-12">
              <Link to={`details/${product.id}`}>
                <img src={product.img} className="img-fluid" alt="" />
              </Link>
            </div>
            <div className="col-md-6 col-12">
              <h2>{product.name}</h2>
              <p>
                <b>Processor: </b>
                {product?.description}
              </p>
              <p>
                <b>Quantity: </b>1
              </p>
              <div className="btn-section">
                <button onClick={()=>removeItem(product?.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
