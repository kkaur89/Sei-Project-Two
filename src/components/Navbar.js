import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {




  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img src="/images/Better Logo.png" alt="Tipple your fancy" />
      </div>
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
        </div>
        <div className="navbar-start">
          <Link to="/a-z" className="navbar-item">
            A-Z
          </Link>
        </div>
        <Link to="/cocktail" className="navbar-item">
          CocktailSearch
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
