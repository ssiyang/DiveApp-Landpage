import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './index.css';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg" className="navBar">
                    <Navbar.Brand href="#home" className="navTitle">深入潛初</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#feature1">特色1</Nav.Link>
                            <Nav.Link href="#feature2">特色2</Nav.Link>
                            <Nav.Link href="#feature3">特色3</Nav.Link>
                            <Nav.Link href="#download">下載</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}


