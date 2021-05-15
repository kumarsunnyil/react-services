import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  
} from './NavbarElements';
import DDLink from './NavDropDown';
import NavbarSearch from './NavbarSearch';

import 'bootstrap/dist/css/bootstrap.min.css';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>

          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/gallery' activeStyle>
            Gallery
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <DDLink ></DDLink>
          <NavLink to='/contact' activeStyle>
            Contact Us
          </NavLink>
          <NavbarSearch />
        </NavMenu>
       
      </Nav>
      
    </>
  );
};
  
export default Navbar;