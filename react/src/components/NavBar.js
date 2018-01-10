import React from 'react';
import { Link } from 'react-router'

const NavBar = props => {
  return(
    <div className="oq-nav-bar">
      {props.children}
    </div>
  )
}

export default NavBar;
