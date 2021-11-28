import { useEffect, useState } from "react";
import { addToDB, getStoredCart } from "../Utilities/localStorageDB";
import useProducts from "./useProducts";

const useHandleCart = () => {
  const { products } = useProducts();
  const [productCart, setProductCart] = useState([]);
 
//  console.log(productCart);
  // console.log(productCart);
  const handleAddToCart = (id) => {
    const quantity = 1;
    addToDB(id, quantity);
    window.location.reload();


  };

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        // console.log(key);
        const addedProduct = products.find(
          (product) => product.id === parseInt(key)
        );
        // console.log(addedProduct);
        if (addedProduct) {
          addedProduct.quantity = savedCart[key];
          storedCart.push(addedProduct);
        }
      }
    
      setProductCart(storedCart);
      // console.log(storedCart);
    }
  }, [products]);
  return {
    handleAddToCart,
    productCart,
  };
};

export default useHandleCart;
