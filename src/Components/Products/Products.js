import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useHandleCart from "../../Hooks/useHandleCart";
import useProducts from "../../Hooks/useProducts";

const Products = () => {
  const { products } = useProducts();
  const { handleAddToCart } = useHandleCart();
  return (
    <div className="container" id="products">
      <div>
        <h2 className="text-center">Our Products</h2>
        <Row xs={1} md={2} lg={3} className="g-4 my-4" >
          {products.map((product) => (
            <Col key={product.id}>
              <Card style={{ position: "relative" }}>
                <Link to={`details/${product.id}`}>
                  <Card.Img
                    style={{ cursor: "pointer",height:"300px",objectFit:"cover" }}
                    variant="top"
                    src={product.img}
                  />
                </Link>

                <i
                  className="fas fa-shopping-cart"
                  onClick={() => handleAddToCart(product.id)}
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    color: "white",
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                ></i>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Products;
