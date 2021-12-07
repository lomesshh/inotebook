import React, {useEffect} from 'react'
import {
    Link, useLocation
  } from "react-router-dom";

const Navbar = () => {

  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload(false);
  }
  
  useEffect(() => {
  }, [location]);

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link {location.pathname==="/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
        </li>
      </ul>
    </div>
    {!localStorage.getItem('token') ?
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link {location.pathname==="/login" ? "active" : ""}`} aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link {location.pathname==="/signup" ? "active" : ""}`} to="/Signup">Signup</Link>
        </li>
      </ul>
    :
    <button className="btn btn-warning  " onClick={handleLogout}>Logout</button>
  }
  </div>
</nav>
        </div>
    )
}

export default Navbar
