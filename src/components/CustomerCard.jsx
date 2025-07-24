import React from 'react';
import { Link } from 'react-router';


function CustomerCard({ customer, handleDelete }) {
  return (
    <div
      className="customer-card"
      
    >
      <div className="customer-info"
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
          
          }} >
      <h3>{customer.name}</h3>
      <p>Email: {customer.email}</p>
      <p>Status: {customer.status}</p>
      </div>
      <div className='delete-button'
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginTop: "10px",

        } }>
        <button
          onClick={() => handleDelete(customer.id)}
          style={{
            padding: "6px 12px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
          
        >
          Delete
        </button>

        <Link
          to={`/customers/${customer.id}`}
          style={{
            padding: "6px 12px",
            backgroundColor: "gray",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px"
          }}
        >
          More
        </Link>
      </div>
    </div>
  );
}

export default CustomerCard;
