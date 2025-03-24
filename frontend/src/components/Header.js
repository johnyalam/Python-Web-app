import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import favicon from "../assets/images/favicon.ico"; 
import logo from "../assets/images/logo.png";
import web_content from "../assets/web_content.json"

function Header() {
    return (
        <>
            <link rel="icon" href={favicon} />
            <title>{web_content.brand}</title>
            <Navbar className="custom-navbar" bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    {/* Clickable Logo and Brand Title */}
                    <Navbar.Brand href="/" className="d-flex align-items-center">
                    {/* Logo */}
                    <img src={logo} alt="Robust Binary Logo" width="40" height="40" className="mr-2" />
                    {/* Brand Title */}
                    <span>{web_content.title}</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* Dropdown for Objectives */}
                            <NavDropdown title="Objectives" id="objectives-dropdown">
                            {web_content.objective.map((item, index) => (
                                <NavDropdown.Item key={index} href={`/objective/${index + 1}`}>
                                {item.heading}
                                </NavDropdown.Item>
                            ))}
                            </NavDropdown>

                            {/* Dropdown for Service Categories */}
                            <NavDropdown title="Service Categories" id="service-category-dropdown">
                            {web_content.service_category.map((item, index) => (
                                <NavDropdown.Item key={index} href={`/service/${index + 1}`}>
                                {item.category}
                                </NavDropdown.Item>
                            ))}
                            </NavDropdown>

                            {/* Dropdown for Project Types */}
                            <NavDropdown title="Project Types" id="project-type-dropdown">
                            {web_content.project_type.map((item, index) => (
                                <NavDropdown.Item key={index} href={`/project/${index + 1}`}>
                                {item}
                                </NavDropdown.Item>
                            ))}
                            </NavDropdown>

                            {/* Dropdown for Development Teams */}
                            <NavDropdown title="Development Teams" id="development-team-dropdown">
                            {web_content.development_team.map((item, index) => (
                                <NavDropdown.Item key={index} href={`/team/${index + 1}`}>
                                {item.country} - {item.team}
                                </NavDropdown.Item>
                            ))}
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;

