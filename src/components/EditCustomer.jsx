import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const BASE_URL = "https://json-server-template-w3qs.onrender.com/customers";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: '',
    notes: ''
  });

  useEffect(() => {
    fetch(`${BASE_URL}/${id}`)
      .then(res => res.json())
      .then(data => setFormData(data));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(() => navigate('/list'));
  };

  return (
    <div className="edit-customer">
      <h2 className='font-bold p-4'>Edit Customer</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4">
        <input name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Customer Name" />
        <input name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
        <input name="status" value={formData.status} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Status" />
        <input name="notes" value={formData.notes} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Notes" />
        <button type="submit" className="bg-green-400 hover:bg-green-200 px-4 py-2 rounded-lg text-sm">Update</button>
      </form>
    </div>
  );
}

export default EditCustomer
