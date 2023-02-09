import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // createBrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home/Home';

import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import HandList from './pages/ProductList/HandList';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: '/product-list',
//     children: [
//       { index: true, element: <ProductList /> },
//       { path: '/hand-list', element: <HandList /> },
//     ],
//   },
// ]);

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/hand-list" element={<HandList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
