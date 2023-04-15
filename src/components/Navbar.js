import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="topnav">
            <a className="active" href="url_home">Home</a>
            <a href="url_news">News</a>
            <a href="url_contatti">Contatti</a>
            <a href="url_info">Info</a>
        </div>
    </nav>
  )
}

export default Navbar