export const fetchProducts = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_PRODUCTS" });
      fetch("http://localhost:3000/products")
        .then(response => {
          console.log('fetching products')
          return response.json()
        })
        .then((products) => {
          dispatch({ type: "ADD_PRODUCTS", payload: products });
          console.log('fetched products')
        });
    };
};  