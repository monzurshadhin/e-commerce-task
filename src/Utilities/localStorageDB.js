const addToDB = (id, quantity) => {
   
    const exist = getDb();
  
    let product_cart = {};
    if (exist) {
      product_cart = JSON.parse(exist);
      if (product_cart[id]) {
        product_cart[id] = quantity;
      } else {
        product_cart[id] = quantity;
      }
    } else {
      product_cart[id] = quantity;
    }
  
    updateDb(product_cart);
  };
  const getDb = () => localStorage.getItem("product_cart");
  const updateDb = (cart) => {
    localStorage.setItem("product_cart", JSON.stringify(cart));
  };
  const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  };
  const removeFromDb = (id) =>{
    const exist = getDb();
    if(!exist){
  
    }
    else{
      const product_cart = JSON.parse(exist);
      delete product_cart[id];
      updateDb(product_cart)
      
    }

    
  }
 
  export { addToDB, getStoredCart, removeFromDb, getDb };
  
  