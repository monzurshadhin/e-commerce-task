import React from "react";
import { useParams } from "react-router";
import useHandleCart from "../../Hooks/useHandleCart";
import useProducts from "../../Hooks/useProducts";
import Footer from "../Footer/Footer";
import "./Details.css";
const Details = () => {
  const { id } = useParams();
  const { handleAddToCart } = useHandleCart();

  const { products } = useProducts();

  const selectedItem = products?.find(
    (product) => product?.id === parseInt(id)
  );
  // console.log(selectedItem);
  const handlePurchase = () =>{
    alert("Coming Soon")
  }
  return (
    <div>
      <div className="container">
        <div>
          <div className="row my-5">
            <div className="col-12 col-md-8">
              <div className="row mb-4">
                <div className="col-4">
                  <div className="row">
                    <img
                      className="img-fluid mb-4"
                      src={selectedItem?.img1}
                      alt=""
                    />
                  </div>
                  <div className="row">
                    <img
                      className="img-fluid mb-4"
                      src={selectedItem?.img2}
                      alt=""
                    />
                  </div>
                  <div className="row">
                    <img
                      className="img-fluid "
                      src={selectedItem?.img3}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-8">
                  <img
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    src={selectedItem?.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 details">
              <h2>{selectedItem?.name}</h2>
              <h5><b>Tk: </b>{selectedItem?.price}</h5>
              <p>{selectedItem?.description}</p>
              <p>
                <b>Ram: </b>
                {selectedItem?.ram}
              </p>
              <p>
                <b>SDD: </b>
                {selectedItem?.rom}
              </p>
              <p>
                <b>Display: </b>
                {selectedItem?.display}
              </p>

              <div className="btn-section">
                <button onClick={() => handleAddToCart(selectedItem.id)}>
                  Add to cart
                </button>
                <button className="ms-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Coming soon" onClick={handlePurchase}>Buy Now</button>
              </div>
            </div>
          </div>

          <h4>
            <b>Basic Information</b>
          </h4>
          <p><b>Processor: </b>{selectedItem?.description}</p>
          <p>
            <b>Ram: </b>
            {selectedItem?.ram}
          </p>
          <p>
            <b>SDD: </b>
            {selectedItem?.rom}
          </p>
          <p>
            <b>Display: </b>
            {selectedItem?.display}
          </p>
          <p>
            <b>Battery: </b>
            {selectedItem?.Battery}
          </p>
          <p>
            <b>Audio: </b>
            {selectedItem?.audio}
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;
