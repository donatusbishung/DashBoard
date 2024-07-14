import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./components/Authentication";
import DashBoard from "./pages/DashBoard";
import Products from "./pages/Products";
import Customer from "./pages/Customers";
import Income from "./pages/Income";
import Promote from "./pages/Promote";
import Help from "./pages/Help";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" Component={Authentication} />
          <Route path="/login" Component={Authentication} />
          <Route path="/dashboard" Component={DashBoard} />
          <Route path="/products" Component={Products} />
          <Route path="/customers" Component={Customer} />
          <Route path="/income" Component={Income} />
          <Route path="/promote" Component={Promote} />
          <Route path="/help" Component={Help} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
