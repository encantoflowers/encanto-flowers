import React from 'react'

export default function index() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Add logo Encanto Flowers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Categories</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Categories are dynamically generated?</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                        {/* Add icons */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
