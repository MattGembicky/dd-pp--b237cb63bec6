import React from 'react';
import './App.css';

//components
import Shop from './components/Shop';
import Cart from './components/Cart';
import Reducer from './components/Reducer';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//redux
import { createStore } from 'redux';

function App() {
  const store = createStore(Reducer);


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
