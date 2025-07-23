import React from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerCard({ customer, handleDelete }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 border-b last:border-none" 
    
    onClick={() => navigate(`/customer/${customer.id}`)}>
      <h3 className='font-semibold text-gray-800'>{customer.name}</h3>
      <p>{customer.email}</p>
      <p>{customer.status}</p>
      <button 
      className="bg-red-100  px-3 py-1 rounded-full text-sm hover:bg-green-200"
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(customer.id);
        }} 
        
      >
        Delete
      </button>
    </div>
  );
}

export default CustomerCard