import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CustomerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const BASE_URL = "https://json-server-template-w3qs.onrender.com/customers";

  const [customer, setCustomer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch customer details");
        return res.json();
      })
      .then(data => {
        setCustomer(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4 items-center">
      <h1 className="text-2xl font-bold mb-4">Customer Details</h1>
      
      <p><strong>Name:</strong> {customer.name}</p>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Status:</strong> {customer.status}</p>
      <p><strong>Notes:</strong> {customer.notes}</p>
      <div className="flex space-x-4 mt-4">
      <button onClick={() => navigate(`/edit/${id}`)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Edit</button>
      <button onClick={() => navigate(-1)} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition">Back</button>
      </div>
    </div>
  );
}
export default CustomerDetails