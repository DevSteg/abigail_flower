import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "/src/assets/images/logo.png";
import "./_navbarTop.scss";

const NavbarTop = () => {
	return (
		<Navbar bg="primary" expand="lg">
			<Container>
				<Navbar.Brand href="/">
					<img src={logo} alt="Logo" className="logo-flower" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavDropdown title="Shop" id="basic-nav-dropdown">
							<NavDropdown.Item href="/products">
								<h6 className="dropdown-item">All Products</h6>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/products/dishes">
								<h6 className="dropdown-item">Dishes</h6>
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/cups">
								<h6 className="dropdown-item">Cups</h6>
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/planters">
								<h6 className="dropdown-item">Planters</h6>
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="/">
							<h6 className="nav-item">Home</h6>
						</Nav.Link>
						<Nav.Link href="/about">
							<h6 className="nav-item">About</h6>
						</Nav.Link>
						<Nav.Link href="/login">
							<h6 className="nav-item">Login</h6>
						</Nav.Link>
						<Nav.Link href="/signup">
							<h6 className="nav-item">Sign Up</h6>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarTop;
