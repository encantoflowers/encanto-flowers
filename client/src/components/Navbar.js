import React, { useEffect } from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries';
import { useStoreContext } from '../utils/GlobalState';



export default function EncantoNav() {
    
    const [state, dispatch] = useStoreContext();

    const { loading, data } = useQuery(QUERY_CATEGORIES);

    const { categories } = state;

    useEffect(() => {
        if (data) {
          dispatch({
            type: UPDATE_CATEGORIES,
            products: data.categories,
          });
        }
      }, [data, loading, dispatch]);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                <img
                alt=""
                src="/images/encanto_logo_nav.png"
                width="90"
                    height="30"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                    {data.length ? (
                        <div>
                            {data.map((category) => (
                            <NavDropdown.Item href="#" key={category._id}>{category.name}</NavDropdown.Item>
                        ))}
                        </div>
                        
                    ) : (
                        <NavDropdown.Item href="#">No Categories!</NavDropdown.Item>
                    )} 
                    
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
