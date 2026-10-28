import React from "react";
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import "./App.css";
import LoginPage from "./Components/ModuleAndSubmodule/Customer/Login";
import HomePage from "./Components/ModuleAndSubmodule/Customer/home";
import SellerLoginPage from "./Components/ModuleAndSubmodule/Seller/SellerLogin";
import CustomerRegistration from "./Components/ModuleAndSubmodule/Customer/CustomerRegistration";
import SellerRegistration from "./Components/ModuleAndSubmodule/Seller/SellerRegistration";
import AdminLoginPage from "./Components/ModuleAndSubmodule/Admin/AdminLoginPage";
import SellerMenus from "./Components/Routes/SellerMenus/SellerMenus";
import AdminMenus from "./Components/Routes/AdminMenus";
import CustomerMenus from "./Components/Routes/CustomerMenus";
import CommonScreen from "./Components/Structure/CommonScreen";
import PersistentDrawerLeft from "./Components/ModuleAndSubmodule/NewSidebar";

function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/react/index" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/new-sidebar" element={<PersistentDrawerLeft />} />
          <Route path="/" element={<CommonScreen />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
          <Route path="/logout" element={<LoginPage />} />
          <Route path="/seller/login" element={<SellerLoginPage />} />
          <Route path="/signup" element={<CustomerRegistration />} />
          <Route path="/seller/registration" element={<SellerRegistration />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          {AdminMenus()}
          {SellerMenus()}
          {CustomerMenus()}
          {AdminMenus}
        </Routes>
      </Router>
    </>
  );
}

export default App;