import React from 'react'
import { Nav, Navbar, Container, NavDropdown, Form} from 'react-bootstrap'
import logo from "../images/logo.png"
import cart from "../images/cart.png"
import user from "../images/user.png"
import SearchIcon from "@material-ui/icons/Search"
function Header() {
  return (
    <div className="containerFluid">


<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img className="avatar image" src={logo} alt="logo"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
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
      <div>
        <Form className="d-flex">
        
         <div>
             <h6 style={{float:"left",marginTop:"10px",marginRight:"auto"}}> ship to:</h6>
      
      
              <NavDropdown title="789 Davis Lane" id="navbarScrollingDropdown"style={{float:"left"}}>
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2" style={{color:"grey", float:"left"}}><img className="avatar image " src={user} alt="user"/>My Account</Nav.Link>
              <Nav.Link href="#action2" style={{color:"grey", float:"left"}}><img className="avatar image" src={cart} alt="cart"/>Cart</Nav.Link>

         </div> 
  
      
        {/* <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button> */}
        
      </Form> </div> 
    </Navbar.Collapse>
    <div className="header_search mt-5"style={{float:"bottom"}}>
          <input className="header-searchInput" type="text" style={{height:"30px",width:"300px" }}/>
          <SearchIcon className="header_searchicon bg-primary "style={{color:"white",height:"30px",marginTop:"-5px"}} />
        </div>
  </Container>
  
</Navbar>

    </div >
  )
}

export default Header