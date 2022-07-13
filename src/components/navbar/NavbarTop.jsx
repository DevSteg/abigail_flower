import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "/src/assets/images/flower.webp";
import "./_navbarTop.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Logout from "../logout/Logout";

const Loggedin = () => {
	return (
		<>
			<Nav.Link href="/profile">
				<h6 className="nav-item">Profile</h6>
			</Nav.Link>
			<Nav.Link>
				<Logout className="nav-item" />
			</Nav.Link>
		</>
	);
};

const NotLoggedIn = () => {
	return (
		<>
			<Nav.Link href="/login">
				<h6 className="nav-item">Login</h6>
			</Nav.Link>
			<Nav.Link href="/signup">
				<h6 className="nav-item">Sign Up</h6>
			</Nav.Link>
		</>
	);
};

const NavbarTop = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		setIsLoggedIn(() => {
			return user ? true : false;
		});
	}, [user]);

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
						{isLoggedIn ? <Loggedin /> : <NotLoggedIn />}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarTop;
