import React from "react";
import "./navbar.css";
// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
// import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import SyncIcon from '@mui/icons-material/Sync';

function NavbarPage() {
  return (
    <div class="shadow">

    
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand
          style={{ fontSize: "30px", paddingLeft: "20px" }}
          href="#"
        >
          <span style={{color:"blue"}}>Yamak</span><span>.ai</span>
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              fontSize: "17px",
              paddingLeft: "250px",
              maxHeight: "150px",
            }}
            navbarScroll
          >
            <Nav.Link
              style={{ fontSize: "16px", paddingRight: "20px" }}
              href="#action1"
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "16px", paddingRight: "20px" }}
              href="#action2"
            >
              Marketing
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "16px", paddingRight: "20px" }}
              href="#action2"
            >
              Social Media
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "16px", paddingRight: "20px" }}
              href="#action2"
            >
              Sales Copy
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "16px", paddingRight: "20px" }}
              href="#action2"
            >
              Blogs
            </Nav.Link>
            <Nav.Link style={{ fontSize: "16px" }} href="#action2">
              Others
            </Nav.Link>
            {/* <Nav.Link style={{fontSize: '16px'}} href="#action2"><i class="bi bi-arrow-repeat"></i></Nav.Link> */}
            <svg
              style={{marginLeft:"20px", paddingTop:"10px", width:"25px"}}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="syncIcon bi bi-arrow-repeat"
              viewBox="0 0 16 16"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
              <path
                fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              />
            </svg>
            <svg
              style={{marginLeft:"20px", paddingTop:"10px", width:"25px"}}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarPage;
