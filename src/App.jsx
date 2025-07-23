import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  AddCustomer  from './components/AddCustomer';
import  CustomerList  from './components/CustomerList';
import  EditCustomer  from './components/EditCustomer';
import  CustomerDetails  from './components/CustomerDetails';
import  Navbar  from './components/Navbar';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<CustomerList />} />
        <Route path="/add" element={<AddCustomer />} />
        <Route path="/edit/:id" element={<EditCustomer />} />
        <Route path="/customer/:id" element={<CustomerDetails />} />
      </Routes>
    </div>
  );
}

export default App
