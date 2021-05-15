import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class NavbarSearch extends Component {

    render () {
        return <Form inline test>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    }
}

export default NavbarSearch;