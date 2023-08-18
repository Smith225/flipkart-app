import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';
import Home from "./components/Home";
import Signup from './components/Signup';
import Login from './components/Login';
import SingleProduct from './components/SingleProduct';
import ProductState from './context - products/ProductState';
import UserInfo from './components/UserInfo';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  const [progress, setProgress]= useState(0)

  return (


    <ProductState>
      <Router>

        <Navbar />

        <LoadingBar
          color='#0000FF'
          progress={progress}
          height={3}
          onLoaderFinished={() => setProgress(0)}
        />

        <Routes>

          <Route path="/" element={<Home  setProgress={setProgress} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/account" element={<UserInfo />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>

      </Router>
    </ProductState>
  );
}


export default App;
