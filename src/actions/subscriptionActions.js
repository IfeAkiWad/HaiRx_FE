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

export const deleteSubscriptions = (subscriptionId) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3000/subscriptions/${subscriptionId}`, {
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