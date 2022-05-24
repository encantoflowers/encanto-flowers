import React, { useEffect } from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES, QUERY_USER } from '../../utils/queries';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY
} from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from '../../utils/helpers';
import './style.css';
import Auth from '../../utils/auth';


function EncantoNav() {

  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const { data: userData } = useQuery(QUERY_USER);
  let user;

  if (userData) {
    user = userData.user;
  }

  const { categories } = state;

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: data.categories,
      });
      data.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [data, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });

  };
  if (userData && user.role === 1) {
    return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
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
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {data ? (
                <div>
                  {data.categories.map((category) => (
                    <NavDropdown.Item href={`/categories/${category.Name}`} key={category._id}
                      onClick={() => {
                        handleClick(category._id)
                      }}>{category.Name}</NavDropdown.Item>
                  ))}
                </div>
              ) : (
                <div>
                  <NavDropdown.Item href="#" key='None'>'No Categories'</NavDropdown.Item>
                </div>
              )}
            </NavDropdown>
            <Nav.Link href="/addproduct">Add Product</Nav.Link>
              <Nav.Link href="/addcategory">Add Category</Nav.Link>
              <Nav.Link href="/updateproduct">Update Product</Nav.Link>
              <Nav.Link href="/updatecategory">Update Category</Nav.Link>
              <Nav.Link href="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  } else if (userData && user.role == 0) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
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
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {data ? (
                <div>
                  {data.categories.map((category) => (
                    <NavDropdown.Item href={`/categories/${category.Name}`} key={category._id}
                      onClick={() => {
                        handleClick(category._id)
                      }}>{category.Name}</NavDropdown.Item>
                  ))}
                </div>
              ) : (
                <div>
                  <NavDropdown.Item href="#" key='None'>'No Categories'</NavDropdown.Item>
                </div>
              )}
            </NavDropdown>
            <Nav.Link href="/userprofile">User Profile</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
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
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {data ? (
                <div>
                  {data.categories.map((category) => (
                    <NavDropdown.Item href={`/categories/${category.Name}`} key={category._id}
                      onClick={() => {
                        handleClick(category._id)
                      }}>{category.Name}</NavDropdown.Item>
                  ))}
                </div>
              ) : (
                <div>
                  <NavDropdown.Item href="#" key='None'>'No Categories'</NavDropdown.Item>
                </div>
              )}
            </NavDropdown>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )

  }
}

export default EncantoNav;
