import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const BASE_URL = "https://json-server-template-w3qs.onrender.com/customers";

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [status, setStatus] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [lastContacted, setLastContacted] = useState("");
  const [notes, setNotes] = useState("");

  // Fetch customer info
  useEffect(() => {
    fetch(`${BASE_URL}/${id}`)
      .then((res) => res.json())
      .then((customer) => {
        setName(customer.name);
        setCompany(customer.company);
        setPosition(customer.position);
        setEmail(customer.email);
        setPhoneNumber(customer.phoneNumber);
        setLocation(customer.location);
        setIndustry(customer.industry);
        setStatus(customer.status);
        setCreatedAt(customer.createdAt);
        setLastContacted(customer.lastContacted);
        setNotes(customer.notes);
      })
      .catch((err) => console.error("Error fetching customer data:", err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedCustomer = {
      name,
      company,
      position,
      email,
      phoneNumber,
      location,
      industry,
      status,
      createdAt,
      lastContacted,
      notes,
    };

    fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCustomer)
    })
      .then((res) => res.json())
      .then(() => navigate('/'))
      .catch((err) => console.error("Error updating customer:", err));
  };

  return (
    <div>
      <div className='edit-customer' style={styles.container}>
        <h2>EDIT CUSTOMER</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input style={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input style={styles.input} value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
          <input style={styles.input} value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" />
          <input style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input style={styles.input} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
          <input style={styles.input} value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
          <input style={styles.input} value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="Industry" />
          <input style={styles.input} value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" />
          <input style={styles.input} value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} placeholder="Created At (YYYY-MM-DD)" />
          <input style={styles.input} value={lastContacted} onChange={(e) => setLastContacted(e.target.value)} placeholder="Last Contacted (YYYY-MM-DD)" />
          <textarea style={styles.input} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes"></textarea>
          <button style={styles.button} type='submit'>UPDATE</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    margin: "20px auto",
    maxWidth: "600px",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  form: {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '12px',
    backgroundColor: 'green',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  }
};

export default EditCustomer;

