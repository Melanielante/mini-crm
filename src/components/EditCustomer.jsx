import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

function EditCustomer  ()  {
  const {id} = useParams();
  const navigate = useNavigate();
  const BASE_URL = "https://json-server-template-w3qs.onrender.com/customers";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");

  //gettinng existing customer details
  useEffect(() => {
    fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
    .then((customer) => {
      setName(customer.name);
      setEmail(customer.email);
      setStatus(customer.status);
      setNotes(customer.notes);
    });
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
        "Content Type": "application/json"
      },
      body:  JSON.stringify(updatedCustomer)
    })
    .then((res) => res.json())

    .then(() => navigate('/'));
  };


  return (
    <div>
        <div className='edit-customer'>
          <h2>EDIT CUSTOMER</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder='customer name' onChange={(event) => setName(event.target.value)} />
            <input type="text" value={email} placeholder='email address' onChange={(event) => setEmail(event.target.value)} />
            <input type="text" value={status} placeholder='status' onChange={(event) => setStatus(event.target.value)} />
            <input type="text" value={notes} placeholder='write notes' onChange={(event) => setNotes(event.target.value)} />

            <button type='submit'>UPDATE</button>
          </form>
        </div>
    </div>
  )
}

export default EditCustomer;