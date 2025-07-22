const cardStyle = {
  border: '1px solid black',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '12px',
  backgroundColor: 'green',
  maxWidth: '400px'
};  
const buttonStyle = {
  marginTop: '10px',
  padding: '8px 12px',
  backgroundColor: 'blue',
  border: 'none',
  color: 'white',
  borderRadius: '4px',
  cursor: 'pointer'
};


 

const CustomerCard = ({ customer, onViewDetails }) => {
  return (

    <>
      <h2 >Customer Details</h2>
      <div style={cardStyle}>
      <h3>Name: {customer.name}</h3>
      <p>Email: {customer.email}</p>
      <p>Status: {customer.status}</p>
      <p>Notes: {customer.notes}</p>
      </div>
      
      {/* Button to view more details */}

     <div>
        <button style={buttonStyle} onClick={() => onViewDetails(customer)}>More</button>
      </div>

     

    </>
  );
};

export default CustomerCard;
