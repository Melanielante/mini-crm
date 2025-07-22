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

  const formStyle = {
    maxWidth: '900px',  
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };
  const inputStyle = {
    width: '100%',
    padding: '10px',    
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
  };
  const buttonStyle = {
    padding: '10px 15px', 
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div className="form-container" style={formStyle}>
      <h2>Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />
        
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
        
        <label>Status:</label>
        <input name="status" value={formData.status} onChange={handleChange} style={inputStyle} required />
        
        <label>Notes:</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange} style={inputStyle}/>

        <button type="submit" style={buttonStyle}>Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;


// css for the form
<style>{`
.form-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fafafa;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 12px;
  font-weight: bold;
}

input,
textarea {
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 14px;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
 
  `}

</style>