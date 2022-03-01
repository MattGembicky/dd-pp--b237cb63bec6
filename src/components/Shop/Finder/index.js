import React from 'react';
import finderStyles from './Finder.module.css';

//icons
import MagGlass from './icon.js';

const Finder = ({ setSearchTerm }) => {
  function search(){
  }


  return(
    <div className={finderStyles.Box}>
      <div className={finderStyles.Wrapper}>
        <input className={finderStyles.Input} type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
        <button onClick={() => search()}>
          <MagGlass className={finderStyles.MagGlass}/>
        </button>
      </div>
    </div>
  );
}

export default Finder;
