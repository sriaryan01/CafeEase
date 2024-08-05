import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import Product from '../Components/AdminPageComponents/Product';
import Category from '../Components/AdminPageComponents/Category';
import User from '../Components/AdminPageComponents/User';
import Order from '../Components/AdminPageComponents/Order';
import Bill from '../Components/AdminPageComponents/Bill';
import "../CSS/AdminPage.css";
import { useNavigate } from 'react-router-dom';
import { logout } from '../Services/user_service';



const AdminPage = () => {
  const navigate=useNavigate();

const handleLogout=()=>{

  navigate('/');
  logout();
};

  return (
    <div className="admin-page">
      <nav className="admin-page-nav">
        <ul>
          <li><NavLink to="/admin/products">Product</NavLink></li>
          <li><NavLink to="/admin/category">Category</NavLink></li>
          <li><NavLink to="/admin/user">User</NavLink></li>
          <li><NavLink to="/admin/order">Order</NavLink></li>
          <li><NavLink to="/admin/bill">Bill</NavLink></li>
          <li><NavLink to="/admin">Go Home</NavLink></li>
          <li><NavLink to="/" onClick={handleLogout}>Logout</NavLink></li>
        </ul>
      </nav>
      <div className="admin-content">
        <Routes>
          <Route path="/products" element={<Product />} />
          <Route path="/category" element={<Category />} />
          <Route path="/user" element={<User />} />
          <Route path="/order" element={<Order />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/" element={<h3>Welcome to Admin Dashboard!</h3>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
