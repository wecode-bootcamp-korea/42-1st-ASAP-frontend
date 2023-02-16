import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuProvider } from './components/Nav/MenuModal/Hide';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import HandList from './pages/ProductList/HandList';
import BodyList from './pages/ProductList/BodyList';
import Payment from './pages/Payment/Payment';

function Router() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/hand-list" element={<HandList />} />
          <Route path="/body-list" element={<BodyList />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MenuProvider>
  );
}

export default Router;
