const Reducer = (cart = [], action) => {
  function sameId(cartItem) {
    return cartItem.item.id === action.item.id;
  }

  if(action.type === "update"){
    const index = cart.findIndex(sameId);

    if(index === -1){
      return [...cart, {item: action.item, amount: action.amount}];
    }

    if(action.amount !== 0){
      cart[index].amount = action.amount;

    }else{
      cart.splice(index, 1);
    }
    return cart;
  }
}

export default Reducer;
