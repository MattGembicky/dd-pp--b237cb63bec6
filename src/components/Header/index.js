import React from 'react';
import headerStyles from './Header.module.css';

//icons
import Cart from './icon.js';

//hooks
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function redirect(){
    if(location.pathname === "/"){
      navigate("/cart");
    }else{
      navigate("/");
    }
  }


  return(
    <div className={headerStyles.Wrapper}>
      <h1>Random eshop</h1>
      <button className={headerStyles.Button} onClick={() => redirect()}>
        <Cart className={headerStyles.Cart} />
      </button>
    </div>
  );
}

export default Header;
