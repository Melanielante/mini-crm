import React, { useEffect, useState } from 'react';
import CustomerCard from './CustomerCard';

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const BASE_URL = "https://json-server-template-w3qs.onrender.com/customers";

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched data:", data);
        setCustomers(data);
      })
      
  }, []);

  function handleDelete(id) {
    fetch(`${BASE_URL}/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) {
          setCustomers(prev => prev.filter(c => c.id !== id));
        }
      });
  }

  return (
    <div>
      {Array.isArray(customers) && customers.length > 0 ? (
        customers.map(c => (
          <CustomerCard key={c.id} customer={c} handleDelete={handleDelete} />
        ))
      ) : (
        <p>Loading customers...</p>
      )}
    </div>
  );
}

export default CustomerList;
