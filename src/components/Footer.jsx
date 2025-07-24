import React from 'react'

function Footer ()  {
  return (
    <div>
        <footer  className='footer' >
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