import React, {Component} from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './../../App.css';

class DDLink extends Component {

    render (){
        return <NavDropdown className="dd_link"  title="Services" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/blogs">Engineering</NavDropdown.Item>
        <NavDropdown.Item href="/about">Roofing</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Fabrication</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
      </NavDropdown> 

    }

} 

export default DDLink;