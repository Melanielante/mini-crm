import React from 'react'
import CustomerCard from './CustomerCard';



function CustomerList ({customer, setData}) {
  const BASE_URL = "https://json-server-template-w3qs.onrender.com/customers";
  function handleDelete(id) {
    fetch (`${BASE_URL}/${id}`, {
      method: "DELETE"
    })
    .then(res => {
      if (res.ok) {
        setData(customers.filter(customer.id !== id));
      }
    });
  }
  if (!customer) {
    return <p>LOADING...</p>
  }
  return (
    <div>
      <h2>Current customer</h2>
      <div className='customer-list'>
        {customers.map(customer => {
          <CustomerCard key={customer.id} customer={customer} handleDelete={handleDelete} />
        })}
      </div>
    </div>

  )
}

export default CustomerList