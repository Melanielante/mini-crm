
function CustomerCard ({ customer, onViewDetails, handleDelete }) {
  const {
    name,
    email,
    status,
    notes,
    
  } = customer
  return (

<>
  <h2 >Customer Details here</h2>
  <div >
    <h3>Name: {customer.name}</h3>
    <p>Email: {customer.email}</p>
    <p>Status: {customer.status}</p>
    <p>Notes: {customer.notes}</p>
  </div>
  
  {/* Button to view more details */}

 <div>
    <button  onClick={() => onViewDetails(customer)}>More</button>
 </div>

 

</>
  );
};

export default CustomerCard;














