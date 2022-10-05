export const fetchSubscriptions = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_SUBSCRIPTIONS" });
      fetch("http://localhost:3000/subscriptions")
        .then(response => response.json())
        .then((data) => {
          dispatch({ type: "ADD_SUBSCRIPTIONS", subscriptions: data });
        });
    };
  };  