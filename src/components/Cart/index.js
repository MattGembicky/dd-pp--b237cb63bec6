import React, { useEffect, useState, Fragment } from 'react';
import cartStyles from './Cart.module.css';

//components
import Header from '../Header';

//hooks
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if(cart){
      let res = 0
      cart.forEach(cartItem => res += cartItem.amount * cartItem.item.cost);
      setSum(res);
    }else{
      navigate("/");
    }
  }, [cart, navigate])


  return(
    <Fragment>
      <Header />
      <div className={cartStyles.Wrapper}>
        <div className={cartStyles.Header}>CART</div>
        <hr />
        <div className={cartStyles.List}>
          <span className={cartStyles.ListHeader} style={{textAlign: "left"}}>Name</span>
          <span className={cartStyles.ListHeader}>Amout</span>
          <span className={cartStyles.ListHeader} style={{textAlign: "right"}}>Price</span>
          { cart && cart.map(cartItem => {
              return (
                <Fragment key={cartItem.item.id}>
                  <span className={cartStyles.ListItem} style={{textAlign: "left"}}>{cartItem.item.name}</span>
                  <span className={cartStyles.ListItem}>{cartItem.amount}</span>
                  <span className={cartStyles.ListItem} style={{textAlign: "right"}}>{cartItem.item.cost * cartItem.amount}</span>
                </Fragment>
              );
            })
          }
        </div>
        <hr />
        <div className={cartStyles.TotalSum}>{sum} Czk</div>
        <button onClick={() => navigate("/")} className={cartStyles.Button}>BACK</button>
      </div>
    </Fragment>
  );
}

export default Cart;
