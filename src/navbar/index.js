import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './index.css';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"

export default class NavBar extends React.Component {
    render() {
        return (
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/" className="navTitle">深入潛初</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <ul className="nav">
                                <li className="mr-2">
                                    <Link to="/feature1">特色1</Link>
                                </li>
                                
                                <li className="mr-2">
                                    <Link to="/feature2">特色2</Link>
                                </li>

                                <li className="mr-2">
                                    <Link to="/feature3">特色3</Link>
                                </li>

                                <li className="mr-2">
                                    <Link to="/feature4">特色4</Link>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Navbar>

                </div>
        );
    }
}


