
import React from 'react'
import AddCustomer from './components/AddCustomer'
import CustomerList from './components/CustomerList'
import EditCustomer from './components/EditCustomer'
import './App.css'
import { Route, Routes } from 'react-router'
import CustomerDetails from './components/CustomerDetails'
import Home from './components/Home'
 


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/list' element={<CustomerList />} />
        <Route path='/add' element={<AddCustomer />} />
        <Route path='edit/:id' element={<EditCustomer />} />
        <Route path='customer/:id' element={<CustomerDetails />} />
      </Routes>

    </>
  )
}

export default App
