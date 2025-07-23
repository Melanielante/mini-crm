import React, { useEffect, useState } from 'react';
import  CustomerCard  from './CustomerCard';

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const BASE_URL = "https://json-server-template-w3qs.onrender.com/customers";

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => setCustomers(data));
  }, []);

  function handleDelete(id) {
    fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) {
          setCustomers(prev => prev.filter(c => c.id !== id));
        }
      });
  }

  return (
    <div >
      <h2 className='font-bold p-4 text-center text-2xl'> Current Customers</h2>
      {customers.map(customer => (
        <CustomerCard 
          key={customer.id} 
          customer={customer} 
          handleDelete={handleDelete} 
        />
      ))}
    </div>
  );
}

export default CustomerList
