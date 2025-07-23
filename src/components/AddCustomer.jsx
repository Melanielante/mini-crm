import React, { useState } from 'react';

const API= 'https://json-server-template-w3qs.onrender.com/customers';

const cardStyle = {
  maxWidth: '400px',
  margin: '20px auto',
  padding: '24px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#ffffff',
  fontFamily: 'sans-serif',
};

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  marginBottom: '12px',
  borderRadius: '6px',
  border: '1px solid #ddd',
  fontSize: '16px',
  outline: 'none',
  boxSizing: 'border-box',
};

const buttonStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: 'green', 
  color: 'white',
  fontWeight: '500',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',
};
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
      <form onSubmit={handleSubmit} style={cardStyle} >
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />
        
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
        
        <label>Status:</label>
        <input name="status" value={formData.status} onChange={handleChange} style={inputStyle} required />
        
        <label>Notes:</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange} style={inputStyle} />

        <button style={buttonStyle} type="submit" >Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;


