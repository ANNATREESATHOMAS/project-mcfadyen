import React from 'react'
import { Nav, Navbar, Container, NavDropdown, Form } from 'react-bootstrap'
import './Header.css'
import logo from "../images/logo.png"
import cart from "../images/cart.png"
import user from "../images/user.png"
import SearchIcon from "@material-ui/icons/Search"
function Header() {
  return (
    <div className="containerFluid ">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <div className="box" id="box4"><Navbar.Brand href="#"><img className="logo" src={logo} alt="logo" /></Navbar.Brand></div>
          <div className="box" id="box3"><Navbar.Brand href="#"><img className="logos" src={logo} alt="logo" /><img className="logos" src={user} alt="user" />
            <img className="logos" src={cart} alt="cart" /></Navbar.Brand></div>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">category 1</Nav.Link>
              <Nav.Link href="#action2">category 2</Nav.Link>
              <Nav.Link href="#action2">category 3</Nav.Link>
              <Nav.Link href="#action2">category 4</Nav.Link>
              <Nav.Link href="#">category 5</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="navrht box " id="box1">
            <div className="top ">
              <h6 style={{ float: "left", marginTop: "10px" }}> ship to:</h6>
              <NavDropdown title="789 Davis Lane" id="navbarScrollingDropdown" style={{ float: "left" }}>
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2" className="bag" ><img className="acc" src={user} alt="user" />My Account</Nav.Link>
              <Nav.Link href="#action2" className="bag" ><img className="acc" src={cart} alt="cart" />Cart</Nav.Link>
            </div>
            <div className="bottom ">
              <div className="header_search mt-5">
                <input className="header-searchInput" type="text" />
                <SearchIcon className="header_searchicon bg-primary " />
              </div>
            </div>
          </div>
          <div className="bottom box" id="box2">
            <div className="header_search mt-5">
              <input className="header-searchInput1" type="text" />
              <SearchIcon className="header_searchicon1 bg-primary " />
            </div>
          </div>
        </Container>
      </Navbar>
    </div >
  )
}

export default Header