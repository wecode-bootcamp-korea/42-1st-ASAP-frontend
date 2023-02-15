import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuProvider } from './components/Nav/MenuModal/Hide';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Product from './pages/ProductList/Product/Product';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';

function Router() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}

export default Router;
