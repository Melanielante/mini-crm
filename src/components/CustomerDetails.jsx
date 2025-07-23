import React, { useEffect, useState } from 'react'

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

  if (isLoading) return <p>Loading customer details</p>



  return (
    <div>
        <h1>Customer Details</h1>
    </div>
  )
}

export default CustomerDetails;