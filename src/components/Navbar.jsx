import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  const myStyle={
    backgroundColor: 'rgba(10, 10, 15, 0.927);',
    color: 'white'
  }
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" >
          <a className="navbar-brand" href="/">
            <img className='logo' src={logo} alt="" />Text Analyzer</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li>
              <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"/>
              <label class="btn btn-outline-light" for="btn-check-outlined">Mode</label>
              </li> */}
            </ul>
            <form className="d-flex nav-form" role="search">
              <NavLink to="/register" className="btn btn-outline-danger register bg-red" type="submit">Register</NavLink>
              <NavLink to="/login" className="btn btn-outline-danger login" type="submit">Login</NavLink>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
