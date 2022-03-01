import React, { useState, Fragment } from 'react';

//components
import Finder from './Finder';
import Item from './Item';
import Header from '../Header';

//items
import items from '../items';

//hooks
import { useSelector, useDispatch } from 'react-redux';


const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();

  return(
    <Fragment>
      <Header />
      <div style={{textAlign: "center"}}>
        <Finder setSearchTerm={setSearchTerm} />
        { items.map(item => {
            if(item.name.toLowerCase().indexOf(searchTerm) !== -1){
              return(
                <Item key={item.id} item={item} dispatch={dispatch}/>
              );
            }else{
              return(<Fragment></Fragment>);
            }
          })
        }
      </div>
    </Fragment>
  );
}

export default Shop;
