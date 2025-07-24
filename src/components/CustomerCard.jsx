import React from 'react';
import { Link } from 'react-router-dom';


function CustomerCard({ customer, handleDelete }) {
  return (
    <div
      className="customer-card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "12px",
        backgroundColor: "#f9f9f9"
      }}
    >
      <h3>{customer.name}</h3>
      <p>Email: {customer.email}</p>
      <p>Status: {customer.status}</p>
      
      <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
        <button
          onClick={() => handleDelete(customer.id)}
          style={{
            padding: "6px 12px",
            backgroundColor: "red",
            color: "black",
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
