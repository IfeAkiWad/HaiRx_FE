export const fetchProducts = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_PRODUCTS" });
      fetch("http://localhost:3000/api/v1/products")
        .then(response => response.json())
        .then((products) => {
          dispatch({ type: "ADD_PRODUCTS", payload: products });
        });
    };
};  