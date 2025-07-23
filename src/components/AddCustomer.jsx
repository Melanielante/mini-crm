import React, { useState } from 'react';

const API= 'https://json-server-template-w3qs.onrender.com/customers';

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(() => {
      alert("Customer added!");
      setFormData({ name: '', email: '', status: '', notes: '' });
    });
  };



  return (
    <div >
      <h2>Add New Customer</h2>
      <form onSubmit={handleSubmit} >
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange}  required />
        
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange}  required />
        
        <label>Status:</label>
        <input name="status" value={formData.status} onChange={handleChange}  required />
        
        <label>Notes:</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange}  />

        <button type="submit" >Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;


