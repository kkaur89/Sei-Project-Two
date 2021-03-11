import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {




  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src="/images/main.png" alt="Tipple your fancy" width="100" height="500" />
        </a>
      </div>
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
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
