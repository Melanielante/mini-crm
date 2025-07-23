

import AddCustomer from './components/AddCustomer';

import React from 'react'
import './App.css'
import CustomerList from './components/CustomerList'  


function App() {
  

  return (
    <>
      <h1>MINI CRM</h1>

      <AddCustomer />
      <CustomerList />
      <EditCustomer />

    </>
  )
}

export default App
