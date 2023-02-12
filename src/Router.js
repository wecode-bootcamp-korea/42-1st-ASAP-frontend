import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import HandList from './pages/ProductList/HandList';
import BodyList from './pages/ProductList/BodyList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/hand-list" element={<HandList />} />
        <Route path="/body-list" element={<BodyList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
