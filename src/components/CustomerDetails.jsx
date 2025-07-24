import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router';



function CustomerDetails () {
  const {id} = useParams();
  const navigate = useNavigate();
  const BASE_URL = "https://json-server-template-w3qs.onrender.com/customers";

  const [customer, setCustomer] =  useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] =  useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/${id}`)
    .then((res) => {
      if(!res.ok) throw new Error("Failed to fetch customer details");
      return res.json();
    })
    .then((data) => {
      setCustomer(data);
      setIsLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setIsLoading(false);
    });
  }, [id]);


  if (isLoading) return <p>Loading customer details...</p>
  if(error) return <p>Error: {error} </p>

  return (
<>  
    

    <div>
        <div className='customer-details'>
          <h2>CUSTOMER DETAILS</h2>
          <p><strong>NAME :</strong> {customer.name}</p>
          <p><strong>EMAIL :</strong> {customer.email}</p>
          <p><strong>STATUS :</strong> {customer.status}</p>
          <p><strong>NOTES :</strong> {customer.notes}</p>
          <p><strong>COMPANY :</strong> {customer.company}</p>
          <p><strong>POSITION :</strong> {customer.position}</p>
          <p><strong>PHONE NUMBER :</strong> {customer.phoneNumber}</p>
          <p><strong>LOCATION :</strong> {customer.location}</p>
          <p><strong>CREATED AT :</strong> {customer.createdAt}</p>
          <p><strong>LAST CONTACTED :</strong> {customer.lastContacted}</p>


          <button onClick={() => navigate(`/edit/${id}`)}>EDIT</button>
          <button onClick={() => navigate(-1)} >BACK</button>
        </div>
    </div>
    </>
  )
}

export default CustomerDetails;