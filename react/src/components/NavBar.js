import React from 'react';
import { Link } from 'react-router'

const NavBar = props => {
  return(
    <div className="oq-nav-bar">
      <Link to='/'>Find a Question!</Link>
      {props.children}
    </div>
  )
}

export default NavBar;
