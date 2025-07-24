import React from 'react'

function Footer ()  {
  return (
    <div>
        <footer  className='footer'
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2px",
                backgroundColor: "#282c34",
                color: "white",
                position: "fixed",
                bottom: 0,
                width: "100%",
            }}>
            <div className='footer-left' >
                <p>&copy; {new Date().getFullYear()} MINICRM. All Rights Reserverd.</p>
            </div>
            <div className='footer-right' >
                <a href="/">Home</a>
                <a href="/add">Add A Customer</a>
                <a href="/list">Our Clients</a>
            </div>
        </footer>
    </div>
  )
}

export default Footer