
import "../CSS/DashboardPage.css";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/DashboardPageComponents/Navbar';
import Home from '../Components/DashboardPageComponents/Home';
import Products from '../Components/DashboardPageComponents/Products';
import Orders from '../Components/DashboardPageComponents/Orders';
import Footer from '../Components/DashboardPageComponents/Footer';

const Dashboard = () => {
  return (
    <div className="App" >
      <Navbar />

      <Home />
      <Products />
      <Orders />
      <Footer />
    </div>
  );
};

export default Dashboard;
