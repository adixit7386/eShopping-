import React from "react";
import Home from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";
import Product from "./pages/Product.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Success from "./pages/Success.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/products/:category" element={<ProductList />}></Route>
      </Routes>
      <Routes>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>

      <Routes>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/success"
          element={user ? <Navigate to="/" /> : <Success />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
