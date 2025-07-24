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
    });

    
    
  }, [id]);


  if (isLoading) return <p>Loading customer details...</p>
  if(error) return <p>Error: {error} </p>

  return (
<>  
    

    <div >
        <div className='customer-details' 
        style={{ padding: "20px", 
                 border: "1px solid #ccc", 
                 borderRadius: "8px", 
                 backgroundColor: "#f9f9f9",
                 margin: "20px auto",
                 maxWidth: "600px",
                 fontFamily: "sans-serif",
                 display: "flex",
                 flexDirection: "column",
                 gap: "10px",
                 }}> 
                
          <h2 >CUSTOMER DETAILS</h2>
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


          <button onClick={() => navigate(`/edit/${id}`)}
            style={{
              padding: "10px 16px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
            >EDIT</button>
          <button onClick={() => navigate(-1)}
          style={{
            padding: "10px 16px",
            backgroundColor: "lightgray",
            color: "black",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginLeft: "10px"
          }}
          >BACK</button>
        </div>
    </div>
    </>
  )
}

export default CustomerDetails;