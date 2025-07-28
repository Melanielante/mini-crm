import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const BASE_URL = "https://json-server-template-w3qs.onrender.com/customers";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");

  // Get existing customer details
  useEffect(() => {
    fetch(`${BASE_URL}/${id}`)
      .then((res) => res.json())
      .then((customer) => {
        setName(customer.name);
        setEmail(customer.email);
        setStatus(customer.status);
        setNotes(customer.notes);
      })
      .catch((err) => console.error("Error fetching customer data:", err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedCustomer = {
      name,
      email,
      status,
      notes
    };

    fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // ✅ Fixed typo here
      },
      body: JSON.stringify(updatedCustomer)
    })
      .then((res) => res.json())
      .then(() => navigate('/'))
      .catch((err) => console.error("Error updating customer:", err));
  };

  return (
    <div>
      <div className='edit-customer'
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          margin: "20px auto",
          maxWidth: "600px",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
        <h2>EDIT CUSTOMER</h2>
        <form onSubmit={handleSubmit}
          style={{
            maxWidth: '400px',
            margin: '20px auto',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
            fontFamily: 'sans-serif',
          }}>
          <input
            type="text"
            value={name}
            placeholder='customer name'
            onChange={(event) => setName(event.target.value)}
            className='input-field'
            style={{
              width: '100%',
              padding: '10px 14px',
              marginBottom: '12px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '16px',
              boxSizing: 'border-box',
            }}
          />
          <input
            type="text"
            value={email}
            placeholder='email address'
            onChange={(event) => setEmail(event.target.value)}
            className='input-field'
            style={{
              width: '100%',
              padding: '10px 14px',
              marginBottom: '12px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              boxSizing: 'border-box',
            }}
          />
          <input
            type="text"
            value={status}
            placeholder='status'
            onChange={(event) => setStatus(event.target.value)}
            className='input-field'
            style={{
              width: '100%',
              padding: '10px 14px',
              marginBottom: '12px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '16px',
              boxSizing: 'border-box',
            }}
          />
          <input
            type="text"
            value={notes}
            placeholder='write notes'
            onChange={(event) => setNotes(event.target.value)}
            className='input-field'
            style={{
              width: '100%',
              padding: '10px 14px',
              marginBottom: '12px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '16px',
              boxSizing: 'border-box',
            }}
          />

          <button
            type='submit'
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'green',
              color: 'white',
              fontSize: '16px',
            }}>
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditCustomer;
