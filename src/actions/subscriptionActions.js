export const fetchSubscriptions = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_SUBSCRIPTIONS" });
      fetch("http://localhost:3000/api/v1/subscriptions")
        .then(response => {
          console.log('fetching subscriptions')
          return response.json()
        })
        .then((subscriptions) => {
          console.log('dispatch subscriptions')
          dispatch({ type: "ADD_SUBSCRIPTIONS", payload: subscriptions });
          console.log('fetched subscriptions')
        });
    };
};  

export const deleteSubscriptions = (subscriptionId) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3000/api/v1/subscriptions/${subscriptionId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify()
    });
    const subscription = await response.json();
    console.log(subscription, "deleting subscription");
    dispatch({ type: 'REMOVE_SUBSCRIPTION', payload: subscription });
    alert(subscription.message);
  }
}