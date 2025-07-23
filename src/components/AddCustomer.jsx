import React, { useState } from 'react';

const API = 'https://json-server-template-w3qs.onrender.com/customers';

function AddCustomer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <div className="add-customer"> 
      <h2 className='font-semibold p-4 text-2xl'>Add New Customer</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4">
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <label>Status:</label>
        <input name="status" value={formData.status} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <label>Notes:</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button type="submit" className="flex border rounded-lg px-4 py-1 bg-green-400">Add Customer</button>
      </form>
      
    </div>
     
  );
}
export default AddCustomer