import React, { useEffect, useState } from 'react';
import itemStyles from './Item.module.css';

//hooks
import { useCookies } from 'react-cookie';


const Item = ({ item, dispatch }) => {
  const [amount, setAmount] = useState(0);
  const [cookies, setCookie] = useCookies(['cart']);

  useEffect(() => {
    function sameId(cookieItem) {
      return item.id === cookieItem.id;
    }

    if(cookies.cart !== undefined){
      let temp = cookies.cart;
      const index = temp.findIndex(sameId);

      if(index === -1){
        setAmount(0);
      }else{
        dispatch({type: "update", item: item, amount: temp[index].amount});
        setAmount(temp[index].amount)
      }
    }
  }, [dispatch, cookies, item]);

  function cookieEditAmount(id, amount){
    function sameId(cookieItem) {
      return id === cookieItem.id;
    }

    let temp = cookies.cart;
    const index = temp.findIndex(sameId);
    if(index === -1){
      temp.push({id: id, amount: 1});
      return temp;
    }

    if(amount > 0){
      temp[index].amount = amount;
    }else{
      temp.splice(index, 1);
    }

    return temp;
  }

  function increse(){
    dispatch({type: "update", item: item, amount: amount + 1});
    setCookie('cart', cookieEditAmount(item.id, amount + 1), { maxAge: 86400 });
    setAmount(amount + 1);
  }

  function decrese(){
    if(amount > 0){
      dispatch({type: "update", item: item, amount: amount - 1});
      setCookie('cart', cookieEditAmount(item.id, amount - 1), { maxAge: 86400 });
      setAmount(amount - 1);
    }
  }


  return(
    <div className={itemStyles.Wrapper}>
      <span className={itemStyles.Name}>{item.name}</span>
      <span className={itemStyles.Cost}>{item.cost} Czk</span>
      <div className={itemStyles.NumberBox}>
        <button className={itemStyles.Button} onClick={decrese}>-</button>
        <span className={itemStyles.Number}>{amount}</span>
        <button className={itemStyles.Button} onClick={increse}>+</button>
      </div>
    </div>
  );
}

export default Item;
